!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(e,t,n,r,a){/* eslint-disable no-undef */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof o[r]&&o[r],i=s.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function p(t,n){if(!i[t]){if(!e[t]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var a="function"==typeof o[r]&&o[r];if(!n&&a)return a(t,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(s)return s(t,!0);// Try the node require function if it exists.
if(c&&"string"==typeof t)return c(t);var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}f.resolve=function(n){var r=e[t][1][n];return null!=r?r:n},f.cache={};var d=i[t]=new p.Module(t);e[t][0].call(d.exports,f,d,d.exports,this)}return i[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:p(t)}}p.isParcelRequire=!0,p.Module=function(e){this.id=e,this.bundle=p,this.exports={}},p.modules=e,p.cache=i,p.parent=s,p.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(p,"root",{get:function(){return o[r]}}),o[r]=p;for(var l=0;l<t.length;l++)p(t[l]);if(n){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var d=p(n);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd?define(function(){return d}):a&&(this[a]=d)}}({cUwIV:[function(e,t,n){// Load Brat libraries
var r="/nlp/";head.js(r+"js/jquery.svg.min.js",r+"js/jquery.svgdom.min.js",r+"js/configuration.js",r+"js/util.js",r+"js/annotation_log.js",r+"js/webfont.js",r+"js/dispatcher.js",r+"js/url_monitor.js",r+"js/visualizer.js",r+"js/corenlp-parseviewer.js");var a="The quick brown fox jumped over the lazy dog.",o="",s="";function i(e){var t;return!isNaN(e)&&(0|(t=parseFloat(e)))===t}"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(e){return 0===this.indexOf(e)});/**
 * A reverse map of PTB tokens to their original gloss
 */var c={"-LRB-":"(","-RRB-":")","-LSB-":"[","-RSB-":"]","-LCB-":"{","-RCB-":"}","``":'"',"''":'"'};/**
 * A mapping from part of speech tag to the associated visualization color
 */function p(e){if(e.startsWith("N"))return"#A4BCED";if(e.startsWith("V")||e.startsWith("M"))return"#ADF6A2";if(e.startsWith("P"))return"#CCDAF6";if(e.startsWith("I"))return"#FFE8BE";if(e.startsWith("R")||e.startsWith("W"))return"#FFFDA8";if(e.startsWith("D")||"CD"===e)return"#CCADF6";if(e.startsWith("J"))return"#FFFDA8";else if(e.startsWith("T"))return"#FFE8BE";else if(e.startsWith("E")||e.startsWith("S"))return"#E4CBF6";else if(e.startsWith("CC"))return"#FFFFFF";else if("LS"===e||"FW"===e)return"#FFFFFF";else return"#E3E3E3"}/**
 * A mapping from named entity tag to the associated visualization color
 */function l(e){if("PERSON"===e)return"#FFCCAA";if("ORGANIZATION"===e)return"#8FB2FF";if("MISC"===e)return"#F1F447";if("LOCATION"===e||"COUNTRY"===e||"STATE_OR_PROVINCE"===e||"CITY"===e)return"#95DFFF";if("DATE"===e||"TIME"===e||"DURATION"===e||"SET"===e)return"#9AFFE6";if("MONEY"===e)return"#FFFFFF";if("PERCENT"===e)return"#FFA22B";else return"#E3E3E3"}var d={// Just like d3_category20 but no grays!
name:"d3_category_18",colors:["#aec7e8","#ffbb78","#98df8a","#ff9896","#c5b0d5","#c49c94","#f7b6d2","#dbdb8d","#9edae5","#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#bcbd22","#17becf"]};function f(e,t,n){var r,a=t[e];return null==a&&(a=n.length,t[e]=a,n.push((r=a,d&&r<d.colors.length?d.colors[r]:"#"+Math.random().toString(16).slice(2,8)))),n[a]}/**
 * A mapping from coref values to the associated visualization color
 */var u={},g=[],h={},v=[];/**
 * Get a list of annotators, from the annotator option input.
 */function m(){var e="tokenize,ssplit";return"de"===$("#language").val()|"fr"===$("#language").val()|"es"===$("#language").val()?e+=",mwt":"hu"===$("#language").val()|"it"===$("#language").val()&&(e="cdc_tokenize"),$("#annotators").find("option:selected").each(function(){e+=","+$(this).val()}),e}/**
 * Get the input date
 */function E(){function e(e){return e<10?"0"+e:e}var t=new Date,n=t.getMonth()+1,r=t.getDate(),a=t.getFullYear(),o=t.getHours(),s=t.getMinutes(),i=t.getSeconds();return""+a+"-"+e(n)+"-"+e(r)+"T"+e(o)+":"+e(s)+":"+e(i)}//-----------------------------------------------------------------------------
// Constituency parser
//-----------------------------------------------------------------------------
function b(){var e=function(t,n){if(void 0===n)return e(t,[]);var r=t.shift();return void 0===r?n.pop():"("===r?(n.push(e(t,[])),e(t,n)):")"===r?n:e(t,n.concat(r))},t=function(e){if(2===e.length&&"string"==typeof e[1])return{label:e[0],text:e[1],isTerminal:!0};if(!(e.length>=2))return e;var n={label:e.shift()},r=e.map(function(e){var r=t(e);return"object"==typeof r&&(r.parent=n),r});return n.children=r,n},n=function(e,t,r){if(r=r||0,e.isTerminal)return e.token=t[r],e.tokenIndex=r,e.tokenStart=r,e.tokenEnd=r+1,r+1;if(e.children){e.tokenStart=r;for(var a=0;a<e.children.length;a++)r=n(e.children[a],t,r);e.tokenEnd=r}return r},r=function(r,a){var o=e(r.split('"').map(function(e,t){return t%2==0?e.replace(/\(/g," ( ").replace(/\)/g," ) "):e.replace(/ /g,"!whitespace!")}).join('"').trim().split(/\s+/).map(function(e){return e.replace(/!whitespace!/g," ")}));if(Array.isArray(o)){var s=t(o);return(// Correlate tree with tokens
n(s,a),s)}};this.process=function(e){for(var t=0;t<e.sentences.length;t++){var n=e.sentences[t];n.parse&&(n.parseTree=r(n.parse,n.tokens))}}}// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
/**
 * MAIN()
 *
 * The entry point of the page
 */$(document).ready(function(){// Some initial styling
$(".chosen-select").chosen(),$(".chosen-container").css("width","100%"),// Language-specific changes
$("#language").on("change",function(){$("#text").attr("dir",""),"en"===$("#language").val()?$("#text").attr("placeholder","e.g., The quick brown fox jumped over the lazy dog."):"zh"===$("#language").val()?$("#text").attr("placeholder","例如，快速的棕色狐狸跳過了懶惰的狗。"):$("#text").attr("placeholder","Unknown language for placeholder query: "+$("#language").val())}),// Submit on shift-enter
$("#text").keydown(function(e){if(13==e.keyCode&&e.shiftKey)return e.preventDefault(),!1}),$("#text").keyup(function(e){if(13==e.keyCode&&e.shiftKey)return $("#submit").click(),e.stopPropagation(),!1}),// Submit on clicking the 'submit' button
$("#submit").click(function(){return""==// Get the text to annotate
(a=$("#text").val()).trim()&&(a="en"===$("#language").val()?"The quick brown fox jumped over the lazy dog.":"zh"===$("#language").val()?"快速的棕色狐狸跳过了懒惰的狗":"Unknown language for default query: "+$("#language").val(),$("#text").val(a)),// Update the UI
$("#submit").prop("disabled",!0),$("#annotations").hide(),// $("#patterns_row").hide();
$("#loading").show(),// Run query
$.ajax({type:"POST",url:"/api/nlp/?properties="+encodeURIComponent('{"annotators": "'+m()+'", "date": "'+E()+'"}')+"&pipelineLanguage="+encodeURIComponent($("#language").val()),data:encodeURIComponent(a),dataType:"json",contentType:"application/x-www-form-urlencoded;charset=UTF-8",success:function(e){if($("#submit").prop("disabled",!1),void 0===e||void 0==e.sentences)alert("Failed to reach server!");else{// Re-render divs
function t(t,n,r,a){// (make sure we requested that element)
!(0>m().indexOf(n))&&(// (make sure the data contains that element)
ok=!1,void 0!==e[r]?ok=!0:void 0!==e.sentences&&e.sentences.length>0&&(void 0!==e.sentences[0][r]?ok=!0:void 0!==e.sentences[0].tokens&&e.sentences[0].tokens.length>0&&(ok=e.sentences.some(function(e){return e.tokens.some(function(e){return void 0!==e[r]})}))),ok&&$("#annotations").append('<h4 class="red">'+a+':</h4> <div id="'+t+'"></div>'))}new b().process(e),// Empty divs
$("#annotations").empty(),// (create the divs)
//                  div id      annotator     field_in_data                          label
t("pos","pos","pos","Part-of-Speech"),t("lemma","lemma","lemma","Lemmas"),t("ner","ner","ner","Named Entity Recognition"),t("parse","parse","parseTree","Constituency Parse"),t("deps","depparse","basicDependencies","Basic Dependencies"),t("deps2","depparse","enhancedPlusPlusDependencies","Enhanced++ Dependencies"),t("openie","openie","openie","Open IE"),t("speakers","coref","corefs","Speakers"),t("coref","coref","corefs","Coreference"),t("entities","entitylink","entitylink","Wikidict Entities"),t("kbp","kbp","kbp","KBP Relations"),t("sentiment","sentiment","sentiment","Sentiment"),// Update UI
$("#loading").hide(),$(".corenlp_error").remove(),$("#annotations").show(),// ----------------------------------------------------------------------------
// RENDER
// ----------------------------------------------------------------------------
/**
 * Render a given JSON data structure
 */function(e,t){// Error checks
if("boolean"!=typeof t&&(t=!1),void 0!==e.sentences){/**
     * Register an entity type (a tag) for Brat
     */var n={},r=[],a={},i=[];//
// Construct text of annotation
//
s=[],o=e.sentences,e.sentences.forEach(function(e){for(var t=0;t<e.tokens.length;++t){var n=e.tokens[t],r=n.word;void 0!==c[r]&&(r=c[r]),t>0&&s.push(" "),n.characterOffsetBegin=s.length;for(var a=0;a<r.length;++a)s.push(r[a]);n.characterOffsetEnd=s.length}s.push("\n")}),s=s.join("");//
// Loop over sentences.
// This fills in the variables above.
//
for(var d=[],m=[],E=[],b=[],F=[],_=[],y=[],x=[],T={},O=[],k={},N=[],I=[],C=[],R=[],j=[],A=0;A<e.sentences.length;++A){var S=e.sentences[A];S.index;var B=S.tokens,w=S.basicDependencies,P=S.enhancedPlusPlusDependencies;// Speakers
if(S.parseTree,B.length>0&&void 0!==B[0].speaker){var D="S("+B[0].speaker+")";eg("SPEAKER",D);var U=parseInt(B[0].characterOffsetBegin),M=parseInt(B[B.length-1].characterOffsetEnd);j.push(["sent"+A,D,[[U,M]]])}// POS tags
/**
         * Generate a POS tagged token id
         */function L(e){return"POS_"+A+"_"+e}if(B.length>0&&void 0!==B[0].pos)for(var W=0;W<B.length;W++){var V=B[W],K=V.pos,U=parseInt(V.characterOffsetBegin),M=parseInt(V.characterOffsetEnd);eg("POS",K),d.push([L(W),K,[[U,M]]])}// Dependency parsing
/**
         * Process a dependency tree from JSON to Brat relations
         */function Y(e,t){// Format: [${ID}, ${TYPE}, [[${ARGNAME}, ${TARGET}], [${ARGNAME}, ${TARGET}]]]
for(var n=[],r=0;r<t.length;r++){var a=t[r],o=a.governor-1,s=a.dependent-1;-1!=o&&(eh(a.dep),n.push([e+"_"+A+"_"+r,a.dep,[["governor",L(o)],["dependent",L(s)]]]))}return n}// Lemmas
if(void 0!==w&&(_=_.concat(Y("dep",w))),void 0!==P&&(y=y.concat(Y("dep2",P))),B.length>0&&void 0!==B[0].lemma)for(var W=0;W<B.length;W++){var V=B[W],q=V.lemma,U=parseInt(V.characterOffsetBegin),M=parseInt(V.characterOffsetEnd);eg("LEMMA",q),m.push(["LEMMA_"+A+"_"+W,q,[[U,M]]])}// NER tags
// Assumption: contiguous occurrence of one non-O is a single entity
if(B.some(function(e){return e.ner}))for(var W=0;W<B.length;W++){var z=B[W].ner||"O",J=B[W].normalizedNER;if(void 0===J&&(J=z),"O"!=z){for(var G=W;G<B.length-1&&B[G+1].ner==z;)G++;eg("NER",z,z),E.push(["NER_"+A+"_"+W,z,[[B[W].characterOffsetBegin,B[G].characterOffsetEnd]]]),z!=J&&(eg("NNER",J,z),E.push(["NNER_"+A+"_"+W,J,[[B[W].characterOffsetBegin,B[G].characterOffsetEnd]]])),W=G}}// Sentiment
if(void 0!==S.sentiment){var H=S.sentiment.toUpperCase().replace("VERY","VERY ");eg("SENTIMENT",H),b.push(["SENTIMENT_"+A,H,[[B[0].characterOffsetBegin,B[B.length-1].characterOffsetEnd]]])}// Entity Links
// Carries the same assumption as NER
if(B.length>0)for(var W=0;W<B.length;W++){var X=B[W].entitylink;if("O"!=X&&void 0!==X){for(var G=W;G<B.length-1&&B[G+1].entitylink==X;)G++;eg("LINK",X),F.push(["LINK_"+A+"_"+W,X,[[B[W].characterOffsetBegin,B[G].characterOffsetEnd]]]),W=G}}// Open IE
// Helper Functions
function Z(e){return"OPENIEENTITY_"+A+"_"+e[0]+"_"+e[1]}function Q(e,t){// Don't add duplicate entities
T[[A,e,t]]||(T[[A,e,t]]=!0,// Add the entity
x.push([Z(e),t,[[B[e[0]].characterOffsetBegin,B[e[1]-1].characterOffsetEnd]]]))}function ee(e,t,n){// Don't add duplicate relations
k[[A,e,t,n]]||(k[[A,e,t,n]]=!0,// Add the relation
O.push(["OPENIESUBJREL_"+A+"_"+e[0]+"_"+e[1]+"_"+t[0]+"_"+t[1],n,[["governor",Z(e)],["dependent",Z(t)]]]))}// Render OpenIE
if(void 0!==S.openie){// Register the entities + relations we'll need
eg("ENTITY","Entity"),eg("RELATION","Relation"),eh("subject"),eh("object");// Loop over triples
for(var W=0;W<S.openie.length;++W){var et=S.openie[W].subjectSpan,en=S.openie[W].relationSpan,er=S.openie[W].objectSpan;if(!(0>parseInt(en[0])||0>parseInt(en[1]))){var U=parseInt(V.characterOffsetBegin);// Add the entities
Q(et,"Entity"),Q(en,"Relation"),Q(er,"Entity"),// Add the relations
ee(en,et,"subject"),ee(en,er,"object")}// This is a phantom relation
}}// End OpenIE block
//
// KBP
//
// Helper Functions
function ea(e){return"KBPENTITY_"+A+"_"+e[0]+"_"+e[1]}function eo(e,t){// Don't add duplicate entities
I[[A,e,t]]||(I[[A,e,t]]=!0,// Add the entity
N.push([ea(e),t,[[B[e[0]].characterOffsetBegin,B[e[1]-1].characterOffsetEnd]]]))}if(void 0!==S.kbp){// Register the entities + relations we'll need
eh("subject"),eh("object");// Loop over triples
for(var W=0;W<S.kbp.length;++W){for(var es,ei,et=S.kbp[W].subjectSpan,ec="Entity",ep=et[0];ep<et[1];++ep)"Entity"==ec&&void 0!==B[ep]&&"O"!=B[ep].entitylink&&void 0!==B[ep].entitylink&&(ec=B[ep].entitylink);eg("KBP_ENTITY",ec);for(var er=S.kbp[W].objectSpan,el="Entity",ep=er[0];ep<er[1];++ep)"Entity"==el&&void 0!==B[ep]&&"O"!=B[ep].entitylink&&void 0!==B[ep].entitylink&&(el=B[ep].entitylink);eg("KBP_ENTITY",el);var ed=S.kbp[W].relation,U=parseInt(V.characterOffsetBegin);// Add the entities
eo(et,ec),eo(er,el),R[[A,es=et,ei=er,ed]]||(R[[A,es,ei,ed]]=!0,// Add the relation
C.push(["KBPRELATION_"+A+"_"+es[0]+"_"+es[1]+"_"+ei[0]+"_"+ei[1],ed,[["governor",ea(es)],["dependent",ea(ei)]]]))}}// End KBP block
}// End sentence loop
//
// Shared variables
// These are what we'll render in BRAT
//
// (pos)
var ef=[],eu=[];g=[],u={},v=[],h={},void 0!==e.corefs&&(eh("coref",!0),eg("COREF","Mention"),Object.keys(e.corefs).forEach(function(t){var n=e.corefs[t];if(n.length>1){var r="CorefEntity"+t;eg("COREF",r);for(var a=0;a<n.length;++a){var o=n[a],s="COREF"+o.id,i=e.sentences[o.sentNum-1].tokens;ef.push([s,r,[[i[o.startIndex-1].characterOffsetBegin,i[o.endIndex-2].characterOffsetEnd]]]);// if (i > 0) {
//   var lastId = 'COREF' + chain[i - 1].id;
//   corefRelations.push(['COREF' + chain[i-1].id + '_' + chain[i].id,
//                        'coref',
//                        [['governor', lastId],
//                         ['dependent', id]    ] ]);
// }
}}})),// Render each annotation
head.ready(function(){ev("pos",d),ev("lemma",m),ev("ner",E),ev("entities",F),ev("deps",d,_),ev("deps2",d,y),j.length&&ev("speakers",j),ev("coref",ef,eu),ev("openie",x,O),ev("kbp",N,C),ev("sentiment",b),$("#parse").length>0&&(new ParseViewer({selector:"#parse"}).showAnnotation(e),$("#parse").addClass("svg").css("display","block"))})}function eg(e,t,a){// Don't add duplicates
if(void 0===a&&(a=t),!n[t]){var o,s;if(n[t]=!0,// Get the color of the entity type
color="#ffccaa","POS"===e)color=p(t);else if("NER"===e)color=l(a);else if("NNER"===e)color=l(a);else if("SPEAKER"===e)color=f(a,h,v);else if("COREF"===e){;color="MENTION"===(o=a)?"#FFE000":f(o,u,g)}else{;"ENTITY"===e?color=p("NN"):"RELATION"===e?color=p("VB"):"LEMMA"===e?color="#FFFFFF":"SENTIMENT"===e?color="VERY POSITIVE"===(s=t)?"#00FF00":"POSITIVE"===s?"#7FFF00":"NEUTRAL"===s?"#FFFF00":"NEGATIVE"===s?"#FF7F00":"VERY NEGATIVE"===s?"#FF0000":"#E3E3E3":"LINK"===e?color="#FFFFFF":"KBP_ENTITY"===e&&(color="#FFFFFF")}// Register the type
r.push({type:t,labels:[t],bgColor:color,borderColor:"darken"})}}function eh(e,t){// Prevent adding duplicates
a[e]||(a[e]=!0,void 0===t&&(t=!1),// Add the type
i.push({type:e,labels:[e],dashArray:t?"3,3":void 0,arrowHead:t?"none":void 0}))}//
// Actually render the elements
//
/**
     * Helper function to render a given set of entities / relations
     * to a Div, if it exists.
     */function ev(e,t,n,a){var o=s;if(a){for(var c=s.length,p=0;p<t.length;++p){var l=t[p][2][0],d=c-l[0];l[0]=c-l[1],l[1]=d}o=o.split("").reverse().join("")}$("#"+e).length>0&&Util.embed(e,{entity_types:r,relation_types:i},{text:o,entities:t,relations:n})}}// End render function
(e,"ar"===$("#language").val());// Render patterns
// $("#annotations").append('<h4 class="red" style="margin-top: 4ex;">CoreNLP Tools:</h4>'); // TODO(gabor) a strange place to add this header to
// $("#patterns_row").show();
}},error:function(e){DATA=e;var t=$("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("corenlp_error").attr("role","alert"),n=$('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'),r=$("<span/>").text(e.responseText);n.appendTo(t),r.appendTo(t),$("#loading").hide(),t.appendTo($("#errors")),$("#submit").prop("disabled",!1)}}),event.preventDefault(),event.stopPropagation(),!1}),// Support passing parameters on page launch, via window.location.hash parameters.
// Example: http://localhost:9000/#text=foo%20bar&annotators=pos,lemma,ner
function(){var e=window.location.hash.slice(1).split("&"),t={};if(e.forEach(function(e){if(2===(e=e.split("=")).length){var n=e[0],r=e[1];t[n]=r}}),t.text){var n=decodeURIComponent(t.text);$("#text").val(n)}if(t.annotators){var r=t.annotators.split(",");// De-select everything
$("#annotators").find("option").each(function(){$(this).prop("selected",!1)}),// Select the specified ones.
r.forEach(function(e){$("#annotators").find('option[value="'+e+'"]').prop("selected",!0)}),// Refresh Chosen
$("#annotators").trigger("chosen:updated")}(t.text||t.annotators)&&$("#submit").click()}(),$("#form_tokensregex").submit(function(e){// Don't actually submit the form
e.preventDefault(),""==$("#tokensregex_search").val().trim()&&$("#tokensregex_search").val("(?$foxtype [{pos:JJ}]+ ) fox");var t=$("#tokensregex_search").val();// Remove existing annotation
$("#tokensregex").remove(),// Make ajax call
// Previously this would escape the + and & in pattern before the
// call to encodeURIComponent, but the server doesn't double
// unescape the incoming patterns, so that was not working
$.ajax({type:"POST",url:"/tokensregex?pattern="+encodeURIComponent(t)+"&properties="+encodeURIComponent('{"annotators": "'+m()+'", "date": "'+E()+'"}')+"&pipelineLanguage="+encodeURIComponent($("#language").val()),data:encodeURIComponent(a),success:function(e){$(".tokensregex_error").remove(),$('<div id="tokensregex" class="pattern_brat"/>').appendTo($("#div_tokensregex")),/**
 * Render a TokensRegex response
 */function(e){/**COREF'
     * Register an entity type (a tag) for Brat
     */var t={},n=[];function r(e,r){// Don't add duplicates
t[e]||(t[e]=!0,void 0===r&&(r="#ADF6A2"),// Register the type
n.push({type:e,labels:[e],bgColor:r,borderColor:"darken"}))}for(var a=[],c=0;c<e.sentences.length;++c)for(var p=o[c].tokens,l=0;l<e.sentences[c].length;++l){var d=e.sentences[c][l];// Add groups
for(groupName in d)if(groupName.startsWith("$")||i(groupName)){r(groupName,"#FFFDA8");var f=parseInt(p[d[groupName].begin].characterOffsetBegin),u=parseInt(p[d[groupName].end-1].characterOffsetEnd);a.push(["TOK_"+c+"_"+l+"_"+groupName,groupName,[[f,u]]])}// Add match
r("match","#ADF6A2");var f=parseInt(p[d.begin].characterOffsetBegin),u=parseInt(p[d.end-1].characterOffsetEnd);a.push(["TOK_"+c+"_"+l+"_match","match",[[f,u]]])}Util.embed("tokensregex",{entity_types:n,relation_types:[]},{text:s,entities:a,relations:[]})}// END renderTokensregex()
(e)},error:function(e){var t=$("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("tokensregex_error").attr("role","alert"),n=$('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'),r=$("<span/>").text(e.responseText);n.appendTo(t),r.appendTo(t),t.appendTo($("#div_tokensregex"))}})}),$("#form_semgrex").submit(function(e){// Don't actually submit the form
e.preventDefault(),""==$("#semgrex_search").val().trim()&&$("#semgrex_search").val("{pos:/VB.*/} >nsubj {}=subject >/nmod:.*/ {}=prep_phrase");var t=$("#semgrex_search").val();// Remove existing annotation
$("#semgrex").remove();// Add missing required annotators
var n=m().split(",");0>n.indexOf("depparse")&&n.push("depparse"),// Make ajax call
$.ajax({type:"POST",url:"/semgrex?pattern="+encodeURIComponent(t)+"&properties="+encodeURIComponent('{"annotators": "'+n.join(",")+'", "date": "'+E()+'"}')+"&pipelineLanguage="+encodeURIComponent($("#language").val()),data:encodeURIComponent(a),success:function(e){$(".semgrex_error").remove(),$('<div id="semgrex" class="pattern_brat"/>').appendTo($("#div_semgrex")),/**
 * Render a Semgrex response
 */function(e){/**
     * Register an entity type (a tag) for Brat
     */var t={},n=[];function r(e,r){// Don't add duplicates
t[e]||(t[e]=!0,void 0===r&&(r="#ADF6A2"),// Register the type
n.push({type:e,labels:[e],bgColor:r,borderColor:"darken"}))}relationTypes=[{type:"semgrex",labels:["-"],dashArray:"3,3",arrowHead:"none"}];for(var a=[],c=[],p=0;p<e.sentences.length;++p)for(var l=o[p].tokens,d=0;d<e.sentences[p].length;++d){var f=e.sentences[p][d];// Add match
r("match","#ADF6A2");var u=parseInt(l[f.begin].characterOffsetBegin),g=parseInt(l[f.end-1].characterOffsetEnd);// Add groups
for(groupName in a.push(["SEM_"+p+"_"+d+"_match","match",[[u,g]]]),f)if(groupName.startsWith("$")||i(groupName)){// (add node)
group=f[groupName],r(groupName=groupName.substring(1),"#FFFDA8");var u=parseInt(l[group.begin].characterOffsetBegin),g=parseInt(l[group.end-1].characterOffsetEnd);a.push(["SEM_"+p+"_"+d+"_"+groupName,groupName,[[u,g]]]),// (add relation)
c.push(["SEMGREX_"+p+"_"+d+"_"+groupName,"semgrex",[["governor","SEM_"+p+"_"+d+"_match"],["dependent","SEM_"+p+"_"+d+"_"+groupName]]])}}Util.embed("semgrex",{entity_types:n,relation_types:relationTypes},{text:s,entities:a,relations:c})}// END renderSemgrex
(e)},error:function(e){var t=$("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("semgrex_error").attr("role","alert"),n=$('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'),r=$("<span/>").text(e.responseText);n.appendTo(t),r.appendTo(t),t.appendTo($("#div_semgrex"))}})}),$("#form_tregex").submit(function(e){// Don't actually submit the form
e.preventDefault(),""==$("#tregex_search").val().trim()&&$("#tregex_search").val("NP < NN=animal");var t=$("#tregex_search").val();// Remove existing annotation
$("#tregex").remove();// Add missing required annotators
var n=m().split(",");0>n.indexOf("parse")&&n.push("parse"),// Make ajax call
$.ajax({type:"POST",url:"/tregex?pattern="+encodeURIComponent(t)+"&properties="+encodeURIComponent('{"annotators": "'+n.join(",")+'", "date": "'+E()+'"}')+"&pipelineLanguage="+encodeURIComponent($("#language").val()),data:encodeURIComponent(a),success:function(e){$(".tregex_error").remove(),$('<div id="tregex" class="pattern_brat"/>').appendTo($("#div_tregex")),$("#tregex").empty(),$("#tregex").append("<pre>"+JSON.stringify(e,null,4)+"</pre>")},error:function(e){var t=$("<div/>").addClass("alert").addClass("alert-danger").addClass("alert-dismissible").addClass("tregex_error").attr("role","alert"),n=$('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'),r=$("<span/>").text(e.responseText);n.appendTo(t),r.appendTo(t),t.appendTo($("#div_tregex"))}})})})},{}]},["cUwIV"],"cUwIV","parcelRequire7ee5");