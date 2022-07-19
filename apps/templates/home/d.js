<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
    <link rel="stylesheet" type="text/css" href="/static/assets/css/custom.css">
    <link rel="stylesheet" type="text/css" href="/static/assets/css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
    <title>OR LOGBOOK</title>
<script>
  function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

</script>
<style>
html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}
/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */
html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}
audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}
audio:not([controls]){display:none;height:0}[hidden],template{display:none}
a{background-color:transparent}a:active,a:hover{outline-width:0}
abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
b,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}
small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}
button,input,select,textarea,optgroup{font:inherit;margin:0}optgroup{font-weight:bold}
button,input{overflow:visible}button,select{text-transform:none}
button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}
button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}
button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}
fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}
legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}
[type=checkbox],[type=radio]{padding:0}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
[type=search]{-webkit-appearance:textfield;outline-offset:-2px}
[type=search]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
/* End extract */
html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}
h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}
.w3-serif{font-family:serif}.w3-sans-serif{font-family:sans-serif}.w3-cursive{font-family:cursive}.w3-monospace{font-family:monospace}
h1,h2,h3,h4,h5,h6{font-family:"Segoe UI",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}
hr{border:0;border-top:1px solid #eee;margin:20px 0}
.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}
.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}
.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}
.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}
.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}
.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}
.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}
.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}
.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}   
.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}
.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}
.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}
.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}
.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}
.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}
.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}
.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}
.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}
.w3-dropdown-hover:hover .w3-dropdown-content{display:block}
.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}
.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}
.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}
.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}
.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}
.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}
.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}
.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}
.w3-main,#main{transition:margin-left .4s}
.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}
.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}
.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}
.w3-bar .w3-button{white-space:normal}
.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}
.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}
.w3-responsive{display:block;overflow-x:auto}
.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:"";display:table;clear:both}
.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}
.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}
.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}
.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}
@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}
.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}
.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}
@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}
.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}
.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}
.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}
.w3-content,.w3-auto{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}
.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}
.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}
.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}
@media (max-width:1205px){.w3-auto{max-width:95%}}
@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}
.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}	
.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}
.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}
@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}
@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}
@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}
@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}
.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}
.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}
.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}
.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}
.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}
.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}
.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}
.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}
.w3-display-position{position:absolute}
.w3-circle{border-radius:50%}
.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}
.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}
.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}
.w3-code,.w3-codespan{font-family:Consolas,"courier new";font-size:16px}
.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}
.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}
.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}
.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}
.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}
.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}
.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}
.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}
.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}
.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}
.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}
.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{filter:grayscale(100%)}
.w3-greyscale,.w3-grayscale{filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{filter:grayscale(50%)}
.w3-sepia{filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}
.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}
.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}
.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}
.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}
.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}
.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}
.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}
.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}
.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}
.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}
.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}
.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}
.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}
.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}
.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}
.w3-padding-top-64{padding-top:64px!important}.w3-padding-top-48{padding-top:48px!important}
.w3-padding-top-32{padding-top:32px!important}.w3-padding-top-24{padding-top:24px!important}
.w3-left{float:left!important}.w3-right{float:right!important}
.w3-button:hover{color:#000!important;background-color:#ccc!important}
.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}
.w3-hover-none:hover{box-shadow:none!important}
/* Colors */
.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}
.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}
.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}
.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}
.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}
.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}
.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}
.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}
.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}
.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}
.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}
.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}
.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}
.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}
.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}
.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}
.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}
.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}
.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}
.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}
.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}
.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}
.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}
.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}
.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}
.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}
.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}
.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}
.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}
.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}
.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}
.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}
.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}
.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}
.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}
.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}
.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}
.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}
.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}
.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}
.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}
.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}
.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}
.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}
.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}
.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}
.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}
.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}
.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}
.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}
.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}
.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}
.w3-text-black,.w3-hover-text-black:hover{color:#000!important}
.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}
.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}
.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}
.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}
.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}
.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}
.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}
.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}
.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}
.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}
.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}
.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}
.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}
.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}
.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}
.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}
.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}
.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}
.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}
.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}
.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}
.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}
.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}
.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}
.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}
.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}
.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}
.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}
.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}
.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}
.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}

      /* end */
      .institute_section input:focus-visible{
    outline: none;
    }
    .institute_section select{
    font-size: 13px;
    color:#333;
    }
    .institute_section select:focus{
    box-shadow: 0px 0px 0px transparent;
    border:1px solid #c6c6c6;
    }
    .add_user{
    padding-left: 17px;
    color:#fff;
    font-size: 11px;
    font-family: "Poppins", sans-serif;
    text-transform:uppercase;
    cursor: pointer;
    }
    .add_user i{
    color: #fff;
    font-size: 20px;
    padding-right: 24px;
    position: relative;
    top: 4px;
    }
    .main_mdl_clr .btn.btn-primary{
    background:#1A374D;
    border:none;
    }
    .institute_section .form-group {
    margin-bottom: 15px;
    }
    .institute_section label{
      width:100%;
      font-size: 14px;
      color: #333;
    }
    .institute_section input{
      width:100%;
      font-size: 13px;
      border:1px solid #c6c6c6;
      border-radius: 5px;
      padding:7px 10px;
    }
    .institute_section input::placeholder{
      font-size: 13px;
    }
    .sprvision_btn{
    font-size: 13px; 
    }
    .pop_mdl_section{
    width: 100%; 
    float:left;
    margin-bottom: 10px;
    }
    .pop_mdl_section ul li a{
    color: #fff;
    margin-bottom: 0px !important;;
    padding-left: 35px !important;
    padding: 1px;
    font-size: 11px;
    }
    .pop_mdl_section ul{
    padding-left: 20px;
    margin-bottom: 8px;
    margin-top: 4px;
    }
    .pop_mdl_section ul li a:hover{
    color:#fff;
    }
    .sprvision_btn:focus {
    box-shadow: 0px 0px 0px transparent;
    }

      /* style.css */

      .main_body_section {
    background: #f0f3f6;
    }
    .performance-bg{
     background: #27293d;
     } 
   .top_header {
    text-align: center;
    }
    .add_user{
    padding-left: 17px;
    color:#fff;
    font-size: 11px;
    font-family: "Poppins", sans-serif;
    text-transform:uppercase;
    cursor: pointer;
    }
    .add_user i{
    color: #fff;
    font-size: 20px;
    padding-right: 24px;
    position: relative;
    top: 4px;
    }
     .top_header button{
        background-color: #e3e1de !important;
        transform: translateY(1px) !important;
        transition: all .15s ease;
        padding: 8px 30px;
        border-radius: 8px;
        border:none;
        color: #535353;
        font-weight: 700;
        border: 1px solid #a5a5a5;
        font-size: 13px;
     }
     .top_header button:focus{
         box-shadow: 0px 0px 0px transparent !important;
     }
     .django_bg_sidebar{
        /*background: #ba54f5;*/
       /* background: linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);*/
        background: #1A374D;
        border-radius: 0.2857rem;
        height: 100vh;
        padding: 15px;
        position: fixed;
        width: 230px;
        overflow: hidden;
        transition: 0.5s cubic-bezier(0.685, 0.0473, 0.346, 1);
        transition-property: top,bottom, width;
        transition-duration: .2s,.2s, .35s;
        transition-timing-function: linear,linear,ease;
     }
     .bg_main_cntnt{
        padding: 15px;
        background-color: #ffffff;
        border: 1px solid #dddddd;
        position: relative;
        width: 100%;
        box-shadow: 0 1px 5px 0px rgb(0 0 0 / 10%);
        border-radius: 0.2857rem;
        height: 100%;
        }
       .main_popup_mdl .modal-footer{
           border-top:none; 
        }
        .main_popup_mdl .modal-header{
            border-bottom:none; 
        }
        .main_popup_mdl .sbmt_btn{
            background: #1A374D !Important;
            margin: 0 auto;
            width: 100px;
            padding: 8px 80px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top:20px;
            border:none;
        }
        .main_popup_mdl .modal-footer button:focus{
            box-shadow: 0px 0px 0px transparent !important;
        }
        .django_bg_sidebar h3 a{
            color: #fff;
            text-decoration: none;
            padding-right: 10px;
        }
        .django_bg_sidebar h3 {
            font-size: 16px;
            text-transform: uppercase;
            position: relative;
            padding-bottom: 15px;
            margin-bottom: 20px;
            padding-left: 15px;
            padding-top: 4px;
        }
        .get_scroll{
            height: 300px;
            overflow-y: scroll !important;
            overflow:hidden;   
        }
        /* width */
        .get_scroll::-webkit-scrollbar {
        width: 5px;
          }
  
  /* Track */
    .get_scroll::-webkit-scrollbar-track {
        background: #f0f0f0; 
        }
   
  /* Handle */
  .get_scroll::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  .get_scroll::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }


        .django_bg_sidebar h3:after{
            content: '';
            position: absolute;
            bottom: 0;
            right: 15px;
            height: 1px;
            width: calc(100% - 30px);
            background: rgba(255, 255, 255, 0.5);
        }
        .django_bg_sidebar ul{
            padding-left: 15px;
            margin-bottom: 0px;
        }
        .django_bg_sidebar ul li{
            list-style: none;
            color: #fff;
        }
        .django_bg_sidebar ul li a{
            color: #fff;
            text-decoration: none;
            display: flex; 
            align-items: center;
            margin-bottom: 20px; 
        }
        .django_bg_sidebar ul li a i{
        padding-right: 20px;
        }
        .django_bg_sidebar ul li a p{
        margin-bottom: 0px;  
        font-size: 11px;
        text-transform: uppercase;
        font-weight: 300;  
        font-family: "Poppins", sans-serif;
        }
        .file-upload {
        background-color: #ffffff;
        width: 100%;
        margin: 0 auto;
        padding:20px 20px 0px 20px;
        }
        .main_popup_mdl .modal-content{
        padding-bottom: 30px;   
        }
        .file-upload-btn {
        width: 100%;
        margin: 0;
        color: #fff;
        background:#767676;
        border: none;
        padding: 10px;
        border-radius: 4px;
        transition: all .2s ease;
        outline: none;
        text-transform: uppercase;
        font-weight: 700;
        }

        .file-upload-btn:hover {
        background: #767676;
        color: #ffffff;
        transition: all .2s ease;
        cursor: pointer;
        }

        .file-upload-btn:active {
        border: 0;
        transition: all .2s ease;
        }

        .file-upload-content {
        display: none;
        text-align: center;
        }

        .file-upload-input {
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        outline: none;
        opacity: 0;
        cursor: pointer;
        }

        .image-upload-wrap {
        margin-top: 20px;
        border: 4px dashed #e7e7e7;
        position: relative;
        }

        .image-dropping,
        .image-upload-wrap:hover {
        background-color: #f2f2f2;
        border: 4px dashed #ffffff;
        }

        .image-title-wrap {
        padding: 0 15px 15px 15px;
        color: #222;
        }

        .drag-text {
        text-align: center;
        }

        .drag-text h3 {
        font-weight: 100;
        text-transform: uppercase;
        color: #9d9d9d;
        padding: 30px 0;
        font-size: 16px;
        }

        .file-upload-image {
        max-height: 200px;
        max-width: 200px;
        margin: auto;
        padding: 20px;
        }

        .remove-image {
        width: auto;
        margin: 0;
        color: #fff;
        background: #cd4535;
        border: none;
        padding: 10px;
        border-radius: 4px;
        transition: all .2s ease;
        outline: none;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 12px;
        margin-top: 30px !important;
        }

        .remove-image:hover {
        background: #c13b2a;
        color: #ffffff;
        transition: all .2s ease;
        cursor: pointer;
        }

        .remove-image:active {
        border: 0;
        transition: all .2s ease;
        }
        div#exampleModal {
        padding: 0px;
        }
        .nav_video_photo{
        display: inline-block;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        vertical-align: middle;
        overflow: hidden;    
        }
        .nav_video_photo img{
        background-position: top;
        object-fit: cover;
        width: 100%;
        height: 100%;    
        }
        .lg_in_out ul.dropdown-menu.show{
        left: -150%;
        }
        .lg_in_out a#navbarDropdown {
        color: #333;
        }
        .lg_in_out a.dropdown-item {
        font-size: 0.75rem;
        padding-top: 0.6rem;
        padding-bottom: 0.6rem;
        margin-top: 5px;
        transition: all 150ms linear;
        }
        nav.navbar.navbar-expand-lg.lg_in_out {
        float: right;
        width: 100%;
        text-align: right;
        }
        .mobile-section-header{
            display: none;
            }
           .side_bar_mbl {
           width: 20%;
           }
           .side_br_mbl_cntr {
          width: 60%;
          }
          .side_bar_rygt_mbl {
          width: 20%;
          }
          .mobile-section-header .row {
          align-items: center;
          }
          .mobile-section-header .bg_mbl_sectn {
          background: transparent !IMPORTANT;
          margin-bottom: 10px;
          }
        @media only screen and (max-width: 1200px) {
        .django_bg_sidebar{
        width: 170px;
        } 
        .top_header button{    
        padding: 8px 10px;
        font-size: 12px;  
        }
        .django_bg_sidebar h3{
        padding-left: 0px;    
        }
        .django_bg_sidebar ul {
        padding-left: 0px;
        }
        }
        @media only screen and (max-width: 992px) {
        .lg_in_out {
         float: right;
        }
        .lg_in_out .container-fluid {
        display: block !IMPORTANT;
        float: right;
        }
        .lg_in_out i{
        color: #333;    
        }
        .lg_in_out #navbarSupportedContent{
        width: 100%;
        position: absolute;
        height: 100%;
        background: #fff;
        z-index: 999;
        right: 0px;
        }
        .lg_in_out a#navbarDropdown{
        text-align: left;
        padding-left: 15px;
        color: #000;   
        }
        .lg_in_out ul.dropdown-menu.show{
        margin: 0px;
        width: 100%;
        border-radius: 0px;
        border: none; 
        left: 0px;   
        }
        .lg_in_out .navbar-nav{
        background: #fff;
        padding: 10px 0px 10px 50px;    
        }
        .desktop-section-section{
        display: none;
        }
       .mobile-section-header{
         display: block;
        }
        .lg_in_out ul.dropdown-menu.show{
        right: 0% !IMPORTANT;
       position: absolute;  
        }
         .mobile-section-header .lg_in_out .navbar-nav{
         padding: 0px 0px 0px 0px !important;  
            }
            .mobile-section-header .lg_in_out #navbarSupportedContent{
            right: 0px;
            left: -60px !important;
            top: 0px;
            }
            .mobile-section-header .lg_in_out a#navbarDropdown{
            padding: 5px 5px;  
            }
        }
        @media only screen and (max-width: 768px) {
        .drag-text h3{
        font-size: 13px;     
        }   
        .main_popup_mdl .modal-footer button{
        font-size: 14px;    
        } 
        .file-upload-btn{
        font-size: 14px;    
        }
        .lg_in_out .navbar-nav{
        padding: 10px 0px 10px 10px;   
        }
        .main-chart-section .col-md-6{
         margin-bottom: 20px;   
        }
        }
        /*----Start latest css----*/
        .drp_dwn_btm button{
        margin-bottom: 20px;
        padding: 9px 50px;  
        background: linear-gradient(0deg, #27293d 0%, #1c1d2b 100%);
        border: 1px solid #27293d;
        }
        .drp_dwn_btm button:focus{  
        border-color: #ba54f5;  
        box-shadow: 0px 0px 0px 0.25rem transparent !important;  
        }
        .bg_mbl_sectn{
        background: linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);
        margin-bottom: 10px;
        }
        .bg_mbl_sectn button{
        background: linear-gradient(0deg, #ba54f5 0%, #e14eca 100%);
        margin-top: 10px;
        }
        .bg_mbl_sectn button:hover{
        color:#fff !important;
        }
        .w3-hide-large{
        color:#fff;    
        }
        .cross_btn {
        text-align: right !important;
        padding: 0px !important;
        position: absolute;
        right: 8px;
        top: 2px;
        }

      /* end */
     .user_cntain {
    display: flex;
    width: 30% !IMPORTANT;
    }
    .user_cntain form {
    width: 100%;
  }
  .navbar.navbar-expand-lg.lg_in_out{
    padding-top: 0px;
  }
  .usr_list select:focus{
    box-shadow:0px 0px 0px transparent;
    border-color: #afafaf;
  }
  .usr_btn {
    width: 30%;
    float: right;
}
.usr_list {
    width: 70%;
    float: left;
}
.usr_list select {
    width: 97%;
    background: #efefef;
    border: 1px solid #afafaf;
    border-radius: 7px;
}
.usr_btn input {
    background: #1a374d;
    border: none;
    color: #fff;
    padding: 7px 20px;
    border-radius: 5px;
}
  .select_box_sidebar {
    margin-top: 20px;
    color: #fff;
    appearance:none;
    -webkit-appearance:none;
    -moz-appearance:none;
    -ms-appearance:none;
    background-position: calc(100% - 12px) center !important;
    background: url("../static/assets/img/arrow_drop.svg") no-repeat #435460;
    padding: 8px 32px 8px 16px;
    border:none;
    font-size: 13px;
    position: relative;
    padding: 8px 11px;
    width: 90%;
}
/* To remove the arrow of select element in IE */
.select_box_sidebar::-ms-expand {
  display: none;
} 
    
      .select_box_sidebar:focus{
      box-shadow: 0px 0px 0px transparent;
      }
      .top_header .btn:hover {
      color:#535353;
      border:1px solid #a5a5a5;
      box-shadow: 0px 0px 5px #d3d3d3;
      }
      .main_body_section{
      overflow-x: hidden;  
      }
      .r_shiny_table tr:nth-child(odd) {
      background-color:#fff;
      }
      .container-fluid.r_shiny_table {
      margin-top: 30px;
      }
      .r_shiny_table tr th , td{
      color:#525f7f;
      font-size: 14px;
      border: 1px solid #dddddd;
      background: #f0f3f6;
      }
      .r_shirny_table tr th{
      border-bottom: 1px solid #dddddd;
      border-left: 1px solid #dddddd;
      border-right:1px solid #dddddd;
      background: #27293d;
      font-size: 16px !important;
      }
      .r_shiny_table tr td{
      border-bottom: 1px solid #dddddd;
      border-left: 1px solid #dddddd;
      border-right: 1px solid #dddddd;
      }
      .r_shiny_table .table>:not(:first-child){
      border-top: none;  
      }
      .r_shiny_table .table.table-bordered {
      border: none;
      }
      .top_section_cases{
      color: #fff; 
      margin-bottom: 15px;
      justify-content: center;
      }
      .top_section_cases .row {
      align-items: center;
      }
      .top_section_cases .col-md-3 i{
      font-size: 34px;
      }
      .design_txt p {
      margin-bottom: 0px;
      text-transform: capitalize;
      font-size: 12px;
      color:#333;
      }
      .design_txt h4 {
      margin-top: 5px;
      font-size: 24px;
      margin-bottom: 5px;
      color:#333;
      }
      .ui_date_time{
      font-size: 10px !important;
      }
      .last_month_data {
      font-size: 10px !important;
      padding-top: 2px;
      }
      .design_icon{
      background: #398AB9;
      padding: 11px 10px;
      border-radius: 5px;  
      display: flex;
      justify-content: center;
      align-items: center;
      }
      .design_icon5{
      background: #46bfbd;
      padding: 11px 10px;
      border-radius: 5px; 
      display: flex;
      justify-content: center;
      align-items: center; 
      }
      .design_icon4{
      background: #D8D2CB;
      padding: 11px 10px;
      border-radius: 5px;  
      display: flex;
      justify-content: center;
      align-items: center;
      }
      .design_icon1{
      background: #1A374D;
      padding: 11px 10px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;  
      }
      .design_icon3{
      background: #36393B;
      padding: 11px 10px;
      border-radius: 5px;  
      display: flex;
      justify-content: center;
      align-items: center;
      }
      .bg_design_dashboard{
      background-color:#ffffff;
      border-radius: 10px;
      padding: 10px;  
      display: flex;
      align-items: center;
      border: 1px solid #dddddd;
      transition: all 1s;
      min-height: 110px;
      justify-content: center;
      }
      .bg_design_dashboard:hover{
      transition: all 1s;
      transform: scale(1.1);
      }
      .top_section_cases .col-md-2 {
      width: 18%;
      margin: 10px;
      }
      .design_txt {
      margin-left: 5px;
      }
      .django_bg_sidebar input{
      border: none;
      border-radius: 3px;
      padding: 4px 15px;
      font-size: 12px;
      margin-top: 7px;
      background: #dedede;
      }
      @media screen and (max-width: 1339px) {
      .top_section_cases .col-md-2 {
      width: 18%;
      margin: 5px;
      } 
      .design_txt h4{
      font-size: 18px;   
      }  
      .top_section_cases .col-md-3 i {
      font-size: 24px;
      }
      }
      @media screen and (max-width: 1200px) {
      .bg_design_dashboard{
      min-height: 130px;
      }
     .design_txt {
      margin-left: 8px;
      }
      .last_month_data {
      font-size: 9px !important;
      }
      .ui_date_time {
      font-size: 9px !important;
      }
      .bg_design_dashboard{
      padding: 8px;  
      }
      .django_bg_sidebar{
      width: 160px;  
      }
      .django_bg_sidebar ul li a{
      margin-bottom: 20px;  
      }
      .django_bg_sidebar ul {
      margin-left: 5px;
      }
      .top_section_cases .col-md-3 i{
      font-size: 16px;  
      }
     
      }
      @media screen and (max-width: 992px) {
      .bg_design_dashboard{
      min-height: 100px;
      }
      .bg_mbl_sectn button{
      padding: 0px 10px; 
      padding-bottom: 6px;
      }
      .top_section_cases .col-md-2 {
      width: 48%;
      margin: 7px;
      }
      .bg_design_dashboard .col-md-3{
      text-align: center; 
      }
      .top_section_cases .col-md-3 i {
      font-size: 28px;
      }
      .bg_design_dashboard:hover{
      transform: scale(1.0); 
      }
      .select_box_sidebar{
      font-size: 11px;  
          
      }
      .django_bg_sidebar ul li a{
      font-size: 8px;  
      margin-bottom: 22px;
      }
      .django_bg_sidebar ul{
      margin-left: 0px;
      padding-left: 0px;  
      }
      .django_bg_sidebar ul li a i{
      font-size: 12px;  
      }
      }
      @media screen and (max-width: 768px) {
      .main-chart-section {
      margin-bottom: 0px !important;
      margin-top: 0px !important;
      }
      .top_section_cases{
      justify-content: space-evenly;  
      }
      }
      @media screen and (max-width: 700px) {
      .top_section_cases .col-md-2{
      width: 100%;
      margin: 0px;  
      }
      .top_section_cases{
      margin: 5px 0px;
      }
      .top_section_cases .col-md-2{
      margin-bottom: 10px;
      }
      .bg_design_dashboard{
      justify-content: left;  
      }
      }
      @media only screen and (max-width: 992px) and (min-width: 991px)  {
      .tablet_section .col-lg-10.col-md-12 {
      width: 100%;
      }
      .lg_in_out #navbarSupportedContent{
      background: transparent;  
      }
      }
      @media screen and (max-width: 992px) and (min-width: 768px) {
      .bg_design_dashboard .col-md-3{
      width: 50px;  
      }
      .top_section_cases .col-md-3 i {
      font-size: 23px;
      }
      }
      .arrow {
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 2px;
    }

    .down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
    .drop{
        padding: 10px 10px;
        margin-left: -1px;
        border: 1px solid ;
        align-items: center;
    }
    label.color_change {
          color: white;
          font-size: 12px;
          padding-top: 7px;
      }
      .django_bg_sidebar [type=checkbox]{
      width: 11px;
      position: relative;
      top: 2px;
      }
    </style>
</head>
<body class="main_body_section"> 
  
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
  <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>


  
          <div class="col-lg-10 col-md-12" id="tsttst">
            <div class="row top_section_cases">
              <div class="col-md-2">
                <div class="row">
                  <div class="bg_design_dashboard">
                    <div class="col-md-3 design_icon1">
                      <i class="fa fa-pie-chart" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-9 design_txt">
                      <p>Total Cases</p>
                      <h4>{{total_cases}}</h4> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <div class="bg_design_dashboard">
                    <div class="col-md-3 design_icon">
                      <i class="fa fa-pie-chart" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-9 design_txt">
                      <p>Cases to-date this year</p>
                      <h4>{{count_of_current_year}}</h4>  
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <div class="bg_design_dashboard">
                    <div class="col-md-3 design_icon3">
                      <i class="fa fa-pie-chart" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-9 design_txt">
                      <p>Cases to date this year as Primary
                      
                      </p>
                      
                      <h4>{{count_of_current}}</h4>  
                     </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <div class="bg_design_dashboard">
                    <div class="col-md-3 design_icon4">
                      <i class="fa fa-pie-chart" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-9 design_txt">
                      <p>Cases last as month as primary </p>
                      <h4>{{count_of_last_month}}</h4>  
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2">
                <div class="row">
                  <div class="bg_design_dashboard">
                    <div class="col-md-3 design_icon5">
                      <i class="fa fa-pie-chart" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-9 design_txt">
                      <p>Cases this month as primary</p>
                      <h4>{{count_of_this_month}}</h4>  
                       </div>
                  </div>
                </div>
              </div>
            </div>
           <div class="container-fluid" id="main">
             <div class="row">
               <div class="col-md-12">
                <div class="row mb-4 main-chart-section">
                  <div class="col-md-6">
                      <div id="container3" class="bg_main_cntnt bgcolor_chart">
                          <canvas id="Role-bar-chart" height="200"></canvas>
                      </div>
                   </div>
                   <div class="col-md-6">        
                      <div id="container3" class="bg_main_cntnt bgcolor_chart">
                          <canvas id="specialty-bar-chart" height="180"></canvas>
                       
                      </div>
                   </div>
              </div>
              <div class="row main-chart-section">
                  <div class="col-md-6">
                      <div id="container" class="bg_main_cntnt bgcolor_chart">
                            <canvas id="Role-pie-chart" height="180" ></canvas>
                      </div>
                   </div>
                   <div class="col-md-6">
                    
                          <div id="container4" class="bg_main_cntnt bgcolor_chart">
                              <canvas id="site-bar-chart" height="180"></canvas>
                          </div>
                      </div>
                   </div>
              </div>

              <div class="row mt-4 main-chart-section">
                  <div class="col-md-12">
                      <div class="bg_main_cntnt bgcolor_chart">
                          <div  id="container2">
                              <canvas id="year-to-date-line-chart" height="100" ></canvas>
                          </div>
                    </div>
                  </div>
              </div>
               </div>
             </div>
             <div class="container-fluid r_shiny_table bgcolor_chart">

              <div class="row ">
                <div class="col-md-12 ">
                  <table class="table table-bordered" id="list_table">
                    <thead>
                      <tr>
                        <th style="background-color:#f6f2f2">Coded Case &nbsp;<i class="arrow down"></i></th>
                        <th style="background-color:#f6f2f2"># &nbsp;<i class="arrow down"></i></th>
                      </tr>
                    </thead>
                    <tbody>
                      {% for key, value in dashboard23.items %}
                      <tr>
                          <td>{{key}}</td>
                          <td>{{value}}</td>
                      </tr>
                      {% endfor %}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
           </div>
   
<!-- Modal -->
<div class="modal fade main_mdl_clr" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body institute_section">
        <form action="" method="POST">
          {% csrf_token %}
          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" value="" placeholder="user name">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" value="" placeholder="password ">
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" value="" placeholder="confirm_password">
          </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
  </div>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade main_mdl_clr" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body institute_section">
        <form method="POST">
          {% csrf_token %}
          <div class="form-group">
            <label>Institute Name</label>
            <input type="text" name="institute" value="" placeholder="institute name">
          </div>
        
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
    </div>
  </div>
</div>



<div class="modal fade main_mdl_clr" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body institute_section">
        <form action="" method="POST">
          {% csrf_token %}
          
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" value="" placeholder="email" required>
          </div>
          <div class="form-group">
            <label>Username</label>
            <input type="text" name="username" value="" placeholder="user name" required>
          </div>
          <div class="form-group">
            <label>First name</label>
            <input type="text" name="first_name" value="" placeholder="first name" required>
          </div>
          <div class="form-group">
            <label>Last name</label>
            <input type="text" name="last_name" value="" placeholder="user name" required>
          </div>
          <div class="form-group">
            <label>Supervisor</label>
          <select class="form-select" aria-label="Default select example" name="supervisor" id="selected_value" required>
            <option value="" selected>Select supervisor </option>
            {% for u in supervisor %}
            <option value="{{u.username}}">{{ u.username }}</option>
            {% endfor %}
           
            <input type="hidden" value="is_admin">
          </select>
          </div>
          <div class="form-group">
            <label>Institute</label>
          <select class="form-select" aria-label="Default select example" name="institute" id="selected_value" required>
            <option value="" selected>Select institute </option>
            {% for u in institute %}
            <option value="{{u.institute}}">{{ u.institute }}</option>
            {% endfor %}
           
            <input type="hidden" value="is_admin">
          </select>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" value="" placeholder="password" required >
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" name="confirm_password" value="" placeholder="confirm_password">
          </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
      </div>
    </div>
  </div>
</div>
<a href="#" id="downloadPdf">Download Report Page as PDF</a>
         <!-- Modal -->
<div class="modal fade main_popup_mdl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body text-center"> 
            <form form method="POST" enctype="multipart/form-data">
            
              {%csrf_token%}
            <div class="file-upload">
                <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add File</button>
              
                <div class="image-upload-wrap">
                  <input class="file-upload-input" name="document" id="document" required="required" type='file' onchange="readURL(this);"  />
                  <div class="drag-text">
                    <h3>Drag and drop a file or select add Image</h3>
                  </div>
                </div>
                <div class="file-upload-content">
                  <div class="image-title-wrap">
                    <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary sbmt_btn">Submit</button>
            </form>
        </div>
       
      </div>
    </div>
  </div>
  
 <script>

              
                $("#myElem").show();
                setTimeout(function() { $("#myElem").hide(); }, 5000);
                
                $('select').on('change', function() {
                   var get_value = this.value;
       
                   if (get_value == 'Role'){
                    $('.get_role_data').show();
                    $('.get_location').hide();
                    $('.sub_specialty').hide();
                    $('.get_staff').hide();
                    $('.get_pgy').hide();
                    
                  }
                  if (get_value == 'Location'){
                    $('.get_location').show();
                    $('.sub_specialty').hide();
                    $('.get_staff').hide();
                    $('.get_role_data').hide();
                    $('.get_pgy').hide();
                    
                  }
                  if (get_value == 'Staff'){
                    $('.get_staff').show();
                    $('.get_location').hide();
                    $('.sub_specialty').hide();
                    $('.get_role_data').hide();
                    $('.get_pgy').hide();
                  }
                  if (get_value == 'Sub-Specialty'){
                    $('.sub_specialty').show();
                    $('.get_role_data').hide();
                    $('.get_staff').hide();
                    $('.get_location').hide();
                    $('.get_pgy').hide();
                  }if (get_value == 'PGY'){

                    $('.get_pgy').show();
                    $('.sub_specialty').hide();
                    $('.get_role_data').hide();
                    $('.get_staff').hide();
                    $('.get_location').hide();

}
                  });
                  
                $('.get_location').hide();
                $('.sub_specialty').hide();
                $('.get_role_data').hide();
                $('.get_staff').hide();
                $('.get_pgy').hide();
            

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
		$('.image-upload-wrap').addClass('image-dropping');
	});
	$('.image-upload-wrap').bind('dragleave', function () {
		$('.image-upload-wrap').removeClass('image-dropping');
});



// Chart.plugins.unregister(ChartDataLabels);
role_bar = document.getElementById('Role-bar-chart');
      

        names = {{ names | safe}}

        data_list = {{ final_data_list | safe }}




        role_chart_config = {
        type: 'horizontalBar',
        data: {
            labels : names,
            datasets:data_list
        },
        options: {
          plugins: {
            datalabels: false   // disable plugin 'p1' for this instance
        },
          title: {
      display: true,
      text: 'Procedures by Surgeon'
          },
          legend: {
        display: true,
        position: 'bottom',
    }, 
        scales: {
            xAxes: [{    
          gridLines: {
                drawOnChartArea: false,
            },
                ticks: {
                    min: 0 // Edit the value according to what you need
                },
              stacked: true
            }],
            yAxes: [{
              gridLines: {
                drawOnChartArea: false,
            },
                stacked: true
            }]
        },
      animation: {
      onComplete: function() {
      var chartInstance = this.chart;
      var ctx = chartInstance.ctx;
      ctx.textAlign = "center";
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "black";

      Chart.helpers.each(
        this.data.datasets.forEach(function(dataset, i)
         {
          var meta = chartInstance.controller.getDatasetMeta(i);
          Chart.helpers.each(
            meta.data.forEach(function(bar, index) {
              data = dataset.data[index];
          
            }),
            this
          );
        }
        ),
        this
      );
    
      // draw total count
     
      this.data.datasets[0].data.forEach(function(data, index) {
      var total = this.data.datasets[0].data[index] + this.data.datasets[1].data[index] + this.data.datasets[2].data[index];
      var meta = chartInstance.controller.getDatasetMeta(2);
      var posX = meta.data[index]._model.x;
      var posY = meta.data[index]._model.y;

      ctx.fillStyle = 'black';
      ctx.fillText(total, posX + 10 , posY + 1 );
    }, this);

      
    }
  },
    },
   
    };
    
    var myPieChart = new Chart(role_bar, role_chart_config);
   
    role_pie = document.getElementById('Role-pie-chart')
        df = {{ keys | safe}}
        df1 = {{ values | safe}}

        reducer = (accumulator, currentValue) => accumulator + currentValue;
        var total1 = df1.reduce(reducer);
      
        role_pie_config = {
        type: 'pie',
        data: {
            datasets: [{

                label: "Role-pie-chart",
                data: df1,
                backgroundColor: ["#D8D2CB", "#1A374D", "#398AB9",],
            }],
            labels: df,
        },
        options: { 
          title: {
      display: true,
      text:'Procedures by Role'
          },
          plugins: 
           {
            datalabels:
             {
              formatter: function (value, ctx) {
                  return ((value * 100) / total1).toFixed(2) + '%'; 
                },
                display: true,
                color: 'black',
            }
    },       
          legend: {
        display: true,
        position: 'bottom'
    }, 
            responsive: true
        },
    };

     
    var mypiehartsss = new Chart(role_pie, role_pie_config);

    specialty_bar = document.getElementById('specialty-bar-chart');
        df = {{ keys1 | safe}}
        
        df1 = {{ values1 | safe}}



        specialty_bar_config = {

        type: 'horizontalBar',
        data: {

            datasets: [{

                data: df1,
                backgroundColor: "#1A374D",
            }],
            labels: df,
            
        },
    
      options: {
        plugins: {
            datalabels: false   // disable plugin 'p1' for this instance
        },

    scales: {
        xAxes: [{ ticks: {
                beginAtZero: true
            },
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{ ticks: {
                beginAtZero: true
            },
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
    animation: {
      onComplete: function() {
      var chartInstance = this.chart;
      var ctx = chartInstance.ctx;
      ctx.textAlign = "center";
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "black";

     
      Chart.helpers.each(
        this.data.datasets.forEach(function(dataset, i)
         {
          var meta = chartInstance.controller.getDatasetMeta(i);
          Chart.helpers.each(
            meta.data.forEach(function(bar, index) {
              data = dataset.data[index];
          
            }),
            this
          );
        }
        ),
        this
      );
     

      // draw total count

      this.data.datasets[0].data.forEach(function(data, index) {
      var total = this.data.datasets[0].data[index]

      var meta = chartInstance.controller.getDatasetMeta(0);
      var posX = meta.data[index]._model.x;
      var posY = meta.data[index]._model.y;
      ctx.fillStyle = 'black';
      ctx.fillText(total, posX + 10 , posY + 1 );
    }, this);

      
    }
  },
   title: {
      display: true,
      text: 'Procedures by Sub-Specialty '
          },
            responsive: true,
            legend: {
        display: false,
            },
        }, 
      };


    var myPieChart = new Chart(specialty_bar, specialty_bar_config);
    
            
    site_bar = document.getElementById('site-bar-chart');
        df = {{ keys2 | safe}}
        df1 = {{ values2| safe}}
        site_bar_config = {
        type: 'horizontalBar',
        data: {
            datasets: [{ 
                data: df1,
                backgroundColor: "#1A374D",
            }],
            labels: df
        },
        options: {
          plugins: {
            datalabels: false   // disable plugin 'p1' for this instance
        },
          
          title: {
      display: true,
      text:'Procedures by Site'
          },
          scales: {
        xAxes: [{
          ticks: {
                beginAtZero: true
            },
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
          ticks: {
                beginAtZero: true
            },
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },animation: {
      onComplete: function() {
      var chartInstance = this.chart;
      var ctx = chartInstance.ctx;
      ctx.textAlign = "center";
      ctx.font = "12px sans-serif";
      ctx.fillStyle = "black";


      Chart.helpers.each(
        this.data.datasets.forEach(function(dataset, i)
         {
          var meta = chartInstance.controller.getDatasetMeta(i);
          Chart.helpers.each(
            meta.data.forEach(function(bar, index) {
              data = dataset.data[index];
          
            }),
            this
          );
        }
        ),
        this
      );
     

      // draw total count
     
      this.data.datasets[0].data.forEach(function(data, index) {
      var total = this.data.datasets[0].data[index]

      var meta = chartInstance.controller.getDatasetMeta(0);
      var posX = meta.data[index]._model.x;
      var posY = meta.data[index]._model.y;
      ctx.fillStyle = 'black';
      ctx.fillText(total, posX + 10 , posY + 1 );
    }, this);

      
    }
  },
            responsive: true,
            legend: {
        display: false,
            },
        },

    };
    var myPieChart = new Chart(site_bar, site_bar_config);


    site_bar = document.getElementById('year-to-date-line-chart');
        df = {{ final_data| safe}}
        df1 = {{ labels | safe}}
    

    
        site_bar_config = {
        type: 'line',
        data: df,
        options: {
          plugins: {
            datalabels: false   // disable plugin 'p1' for this instance
        },
          title: {
      display: true,
      text:'Role over Time'
          },
          scales: {
        xAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }],
        yAxes: [{
            gridLines: {
                drawOnChartArea: false
            }
        }]
    },
          legend: {
        display: true,
        position: 'bottom',
       
        
    },
            responsive: true
        }, 
    

    };
    var barPieChart = new Chart(site_bar, site_bar_config);

    $(document).on('click', 'th', function () {
            var table = $(this).parents('table').eq(0);
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
            this.asc = !this.asc;
            if (!this.asc) {
                rows = rows.reverse();
            }
            table.children('tbody').empty().html(rows);
        });

        function comparer(index) {
            return function (a, b) {
                var valA = getCellValue(a, index),
                    valB = getCellValue(b, index);
                return $.isNumeric(valA) && $.isNumeric(valB) ?
                    valA - valB : valA.localeCompare(valB);
            };
        }

        function getCellValue(row, index) {
            return $(row).children('td').eq(index).text();
        }


    //get dropdown value ajax
    function get_user(user_id){
      $.ajax({
          url: '{% url "generate_bar_chart" %}',
          type: 'GET',
          data: {
              'id': user_id,
              'is_admin': true
          },
          success: function(data) {   
                         
          }
      });
    }
    $('#downloadPdf').click(function(event) {
    // get size of report page
    var reportPageHeight = $('#main').innerHeight();
    var reportPageWidth = $('#main').innerWidth();
    console.log(reportPageHeight,"reportPageHeight")

    var tb_h = $('#list_table').innerHeight();
    var tb_w = $('#list_table').innerWidth();


    
    // create a new canvas object that we will populate with all other canvas objects
    var pdfCanvas = $('<canvas />').attr({
      id: "canvaspdf",
      width: reportPageWidth,
      height: 1500
    });

    var ch = $('<canvas />')
   
    
    // keep track canvas position
    var pdfctx = $(pdfCanvas)[0].getContext('2d');
    var pdfctxX = 0;
    var pdfctxY = 0;
    var buffer = 100;
    
    // for each chart.js chart
    $("canvas").each(function(index) {
      // get the chart height/width
      var canvasHeight = $(this).innerHeight();
      var canvasWidth = $(this).innerWidth();
      
      // draw the chart into the new canvas
      pdfctx.drawImage($(this)[0], pdfctxX, pdfctxY, canvasWidth, canvasHeight);
      pdfctxX += canvasWidth + buffer;
      
      // our report page is in a grid pattern so replicate that in the new canvas
      if (index % 2 === 1) {
        pdfctxX = 0;
        pdfctxY += canvasHeight + buffer;
      }
    });
    
    // create new pdf and add our new canvas as an image
    var pdf = new jsPDF('l', 'pt', [reportPageWidth, reportPageHeight]);
    pdf.addImage($(pdfCanvas)[0], 'PNG', 0, 0);


    
    // download the pdf
    pdf.save('filename.pdf');
  });

</script>
    
</body>
</html>