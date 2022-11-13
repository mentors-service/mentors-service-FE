import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, textarea {
	padding: 0;
	margin: 0;
	font: inherit;
	font-family: 'Open Sans', 'Noto Sans KR', sans-serif;
	font-size: 100%;
	color: #0d0d0d;
	vertical-align: baseline;
	border: 0
}
input,
button{ padding:0; overflow:visible;
font-family: 'Open Sans', 'Noto Sans KR', sans-serif; cursor:pointer;
background: inherit ; border:none; border-radius:0; box-shadow:none;
-webkit-apperance : none;}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {  
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-spacing: 0;
	border-collapse: collapse;
}
textarea:focus, input:focus{
    outline: none;
}
`;

export default GlobalStyle;
