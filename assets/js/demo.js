WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'facebook':   { class: 'facebook', use: true, link: 'https://www.facebook.com/pages/mycompany', extras: 'target="_blank"' },
  //  'linkedin':   { class: 'linkedin', use: true, link: 'https://www.linkedin.com/company/mycompany' },
    'google':     { class: 'gplus',    use: true, link: 'https://plus.google.com/myidongoogle' },
    'twitter':   { class: 'twitter', use: true, link: 'https://www.twitter.com/pages/mycompany', extras: 'target="_blank"' },
   // 'mybutton':   { class: 'git',      use: true, link: 'http://github.com', icon: 'github', title: 'My title for the button' },
    'phone':      { class: 'phone separated',    use: true, link: '+000' },
    'email':      { class: 'email',    use: true, link: 'test@web.com' }
  }
});