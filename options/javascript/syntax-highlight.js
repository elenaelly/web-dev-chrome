var WebDeveloper = WebDeveloper || {}; // eslint-disable-line no-redeclare, no-use-before-define

WebDeveloper.pre               = null;
WebDeveloper.syntaxHighlighter = null;

// Initializes the syntax highlighting
WebDeveloper.initialize = function()
{
  var textArea = $("#web-developer-syntax-highlight-sample");

  WebDeveloper.pre = $("#web-developer-syntax-highlight-example");

  WebDeveloper.pre.text(textArea.val()).hide();

  /* eslint-disable indent */
  WebDeveloper.syntaxHighlighter = CodeMirror.fromTextArea(textArea.get(0),
  {
    mode: "htmlmixed",
    readOnly: "nocursor",
    tabSize: 2,
    theme: "light"
  });
  /* eslint-enable indent */

  WebDeveloper.syntaxHighlight = $(WebDeveloper.syntaxHighlighter.getWrapperElement());
};

// Sets the theme
WebDeveloper.setTheme = function(theme)
{
  // If there is no theme
  if(theme == "none")
  {
    $(WebDeveloper.syntaxHighlighter.getWrapperElement()).hide();
    WebDeveloper.pre.show();
  }
  else
  {
    WebDeveloper.syntaxHighlighter.setOption("theme", theme);
    WebDeveloper.pre.hide();
    $(WebDeveloper.syntaxHighlighter.getWrapperElement()).show();
  }
};

$(function()
{
  WebDeveloper.initialize();
});
