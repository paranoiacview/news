import "./index.css";
// import "./vendor/fonts.css";

import NewsCardList from './js/components/NewsCardList.js';
import SearchInput from './js/components/SearchInput.js';

import './images/favicon.png';
import './images/path_05.png';
import './images/image-03.png';
import './images/fb.png';
import './images/not-found_v1.png';
import './images/github.png';

(function() {
    const cardlist = new NewsCardList();
    const container = '';
    const cards = [];
    cardlist.render(container, cards);

    const search = new SearchInput();
}());