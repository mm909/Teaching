// Use:
// In main section ->
/*

  --- Define a section like this ---
  --- section_[ID]               ---
  --- First link is toc name     ---
  --- "_[ID]"                    ---

  <section id="section_JSIYWS">
    <a id="_JSIYWS">
      <h1>
        <codeG>Javascript In Your Website</codeG>
      </h1>
    </a>
  </section>

  --- Define a subSection like this ---
  --- Use 0 to prefix the link      ---
  <a id="0AST">
    <h2>Adding <code class="prettifyJS">&lt;script></code> tags:</h2>
  </a>
*/


// For TOC -
// Structure:
// Root
//  <ul id="toc">
// Header
//  <li class="navListItem"><a class="navItem" href="#_[ID]"><codeG>[H1]</codeG></a></li>
// Section
//  <section id="TOC_[ID]">
// Section Item
//  <li class="navListItem"><a class="navItem" href="#[ID]">[H2]</a></li>

// For Body -
// Section header/container
//  <section id="section_JSIYWS">
// Section Title
//  <a id="_JSIYWS"><h1><codeG>Javascript In Your Website</codeG></h1></a>
// Section Subtitle
//  <a id="0AST"><h2>Adding <code class="prettifyJS">&lt;script></code> tags:</h2></a>

// For sections
let sections = new Array();
let subSections = new Array();

function buildTOCSubHeaders() {
  for (var i = 0; i < subSections.length; i++) {
    for (var j = 0; j < subSections[i].length; j++) {
      let tocname = sections[i].id.split("_")[1]
      let name = subSections[i][j].id;
      let text = $(subSections[i][j])[0].innerText;
      text = text.replace(/</g, "&lt;")
      $id = $("head").attr('id');
      if ($id == "php") {
        $temp = $("<li class='navListItem'><a class='navItem' href='#" + name + "'><code class=prettifyPHP>" + text + "</code></a></li>")
      } else if ($id == "js") {
        $temp = $("<li class='navListItem'><a class='navItem' href='#" + name + "'><code class=prettifyJS>" + text + "</code></a></li>")
      } else if ($id == "css") {
        $temp = $("<li class='navListItem'><a class='navItem' href='#" + name + "'><code class=prettifyCSS>" + text + "</code></a></li>")
      } else if ($id == "html") {
        $temp = $("<li class='navListItem'><a class='navItem' href='#" + name + "'><code class=prettifyHTML>" + text + "</code></a></li>")
      } else {
        $temp = $("<li class='navListItem'><a class='navItem' href='#" + name + "'><code class=prettifyJS>" + text + "</code></a></li>")
      }
      $("#TOC_" + tocname).append($temp);
    }
  }
}

function buildTOCHeaders() {
  for (var i = 0; i < sections.length; i++) {
    let name = sections[i].id.split("_")[1]
    let text = ($(sections[i]).find("a")[0].innerText);
    $temp = $("<li class='navListItem'><a class='navItem' href='#_" + name + "'><codeG>" + text + "</codeG></a></li>")
    $("#tocDynamic").append($temp);
    $temp = $("<section id='TOC_" + name + "'>")
    $("#tocDynamic").append($temp);
  }
}

function buildTOCArrays(m) {
  sections = $("#mainContent").find("section");
  for (var i = 0; i < sections.length; i++) {
    subSections[i] = new Array();
    let tempSub = $(sections[i]).find("a")
    for (var j = 0; j < tempSub.length; j++) {
      if (tempSub[j].id[0] == "0") {
        subSections[i].push(tempSub[j])
      }
    }
  }

  // -- -- //
  if (m) {
    console.log("--- Sections --- ");
    for (var i = 0; i < sections.length; i++) {
      console.log(sections[i]);
    }
    console.log("--- Sub Sections --- ");
    console.table(subSections)
  }
  // -- -- //
}

jQuery(document).ready(
  function() {
    buildTOCArrays(false);
    buildTOCHeaders();
    buildTOCSubHeaders();
  });









// EOF