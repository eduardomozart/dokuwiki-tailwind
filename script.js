/* DOKUWIKI:include_once js/search.js */
/* DOKUWIKI:include_once js/plugin/copy2clipboard.js */
/* DOKUWIKI:include_once js/plugin/aichat.js */

if(JSINFO.ACT === 'edit' || JSINFO.ACT === 'preview') {
    /* DOKUWIKI:include_once js/toolbar.js */
    /* DOKUWIKI:include_once js/draft.js */
}

if(JSINFO.ACT === 'media' || JSINFO.ACT === 'show') { // media manager or media popup
    /* DOKUWIKI:include_once js/media.js */
    /* DOKUWIKI:include_once js/plugin/acmenu.js */
}
