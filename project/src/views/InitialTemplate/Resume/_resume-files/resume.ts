/*
 * Format HTML : https://www.freeformatter.com/html-formatter.html#ad-output
 * Create and edit resume: https://www.kickresume.com/dashboard/resumes/
 */

const styleToPrint = `
<style>
	.page{
		margin: 0 !important;
		padding-top: 24px;
		max-height: 1122px;
	}
	.cv-wrapper{
		padding-top: 0px !important;
	}
</style>
</html>
`


const resumeHtmlstyle = `
	<link rel="stylesheet" href="./resume-css/iframe-preview.css">
	<style>
		.page {
			display: inline-table;
		}
		ul {
			list-style-type: disc !important;
		}
		.preview-overlay{
			opacity: 0;
		}
		.general-info{
			display: flex !important; 
			flex-wrap: wrap !important;
			justify-content: space-between !important;
		}
		.skills{
			display: flex;
			flex-wrap: wrap;
		}
		.background-wrapper .icon{
			background-color: white !important;
			border: 1px solid black !important;
			height: 28px !important;
			width: 28px !important;
		}
		.background-wrapper svg{
			fill: black !important;
		} 
		.icon:before{
			background-color: transparent !important;
		}
		.headline {
    	padding-left: 159px !important;
		}
	</style>
</html>
`

const originalHtml = ` 
<html>
   <head>
      <meta charset="UTF-8">
      <title></title>
      <link rel="stylesheet" href="https://d2sn08my3g92cp.cloudfront.net/ionicons.css">
      <link rel="stylesheet" href="https://d2sn08my3g92cp.cloudfront.net/fontastic.css">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css">
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">
      <script crossorigin="anonymous" src="https://cdn.polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.includes,Array.prototype.find,Array.prototype.findIndex,Array.prototype.keys,Function.name,Object.fromEntries,Intl.~locale.en,Promise.prototype.finally"></script>
      <link type="text/css" rel="stylesheet" data-font-name="Fira Sans Condensed" href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@400;500&amp;display=swap" data-loaded="true">
   </head>
   <body style="overflow-x: hidden; background: transparent">
      <div id="cv-render">
         <div class="cv-wrapper customize-preview not-pro">
            <div style="width: 794px; transform: scale(1); transform-origin: 50% 0px; max-height: 3526px;">
               <div class="page-wrapper template stanford a4 fcn-fcn fs-13 lh-16 win" style="width: 794px;">
                  <div>
                     <div class="outer-page multi-page grid-100-center type-one">
                        <div class="page first-page" data-part="1" data-count="3">
                           <div class="top-ornament"></div>
                           <svg class="preview-overlay PreviewOverlay__preview-overlay___rbwwTqTcpq" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1152 210" enable-background="new 0 0 1152 210;">
                              <g>
                                 <path d="M139.5,69.4c0,20.5-6.4,36.2-19.2,47c-12.8,10.9-31,16.3-54.6,16.3H48.3v67.7H8V10h60.8c23.1,0,40.7,5,52.7,14.9 C133.5,34.9,139.5,49.7,139.5,69.4z M48.3,99.7h13.3c12.4,0,21.7-2.5,27.9-7.4c6.2-4.9,9.2-12,9.2-21.4c0-9.5-2.6-16.5-7.7-21 c-5.2-4.5-13.3-6.8-24.3-6.8H48.3V99.7z"></path>
                                 <path d="M215.8,127.4v73.1h-40.4V10H231c25.9,0,45,4.7,57.4,14.1c12.4,9.4,18.6,23.7,18.6,42.9c0,11.2-3.1,21.2-9.2,29.9 c-6.2,8.7-14.9,15.6-26.2,20.5c28.7,42.8,47.3,70.5,56,83h-44.8l-45.5-73.1H215.8z M215.8,94.6h13c12.8,0,22.2-2.1,28.3-6.4 c6.1-4.3,9.1-10.9,9.1-20.1c0-9-3.1-15.5-9.3-19.3c-6.2-3.8-15.8-5.7-28.9-5.7h-12.2V94.6z"></path>
                                 <path d="M461.2,200.5H351.6V10h109.7v33.1h-69.3v41.8h64.5V118h-64.5v49.1h69.3V200.5z"></path>
                                 <path d="M609.6,10h40.8l-64.7,190.4h-44L477,10h40.8l35.8,113.3c2,6.7,4.1,14.5,6.2,23.4c2.1,8.9,3.5,15.1,4,18.6 c1-8,4.2-22,9.8-41.9L609.6,10z"></path>
                                 <path d="M674.3,200.5V10h40.4v190.4H674.3z"></path>
                                 <path d="M872.3,200.5H762.6V10h109.7v33.1H803v41.8h64.5V118H803v49.1h69.3V200.5z"></path>
                                 <path d="M1097.5,200.5h-46l-25.8-100c-1-3.6-2.6-10.9-4.9-22.1c-2.3-11.2-3.6-18.6-4-22.5c-0.5,4.7-1.8,12.2-3.9,22.6 c-2.1,10.4-3.7,17.8-4.8,22.2l-25.7,99.8h-45.8L888.1,10h39.7L952.1,114c4.3,19.2,7.3,35.8,9.2,49.9c0.5-4.9,1.7-12.6,3.6-23 c1.9-10.4,3.6-18.4,5.3-24.2L998,10h38.2l27.7,106.7c1.2,4.8,2.7,12.1,4.6,21.9c1.8,9.8,3.2,18.2,4.2,25.3 c0.9-6.8,2.3-15.2,4.2-25.3c1.9-10.1,3.6-18.3,5.2-24.6L1106.2,10h39.7L1097.5,200.5z"></path>
                              </g>
                           </svg>
                           <div class="general-section ">
                              <h2 class="name "><span> Arthur Cabral Lemos </span></h2>
                              <div class="general-info">
                                 <div class="info-wrapper"><span class="key ">Birth date: </span><span class="value">1994/10/15</span></div>
                                 <div class="info-wrapper"><span class="key ">Nationality: </span><span class="value">Brazilian</span></div>
                                 <div class="info-wrapper"><span class="key ">Address: </span><span class="value">Igarapé - MG 32900000, Brazil</span></div>
                                 <div class="info-wrapper"><span class="key ">Phone number: </span><a class="value" href="tel:+55 31 9 9876-2713">+55 31 9 9876-2713</a></div>
                                 <div class="info-wrapper"><span class="key ">Email address: </span><a class="value" href="mailto:acl_360@yahoo.com.br" target="_blank" rel="noopener noreferrer nofollow ugc">acl_360<wbr>@yahoo.com.br</a></div>
                                 <div class="info-wrapper"><span class="key ">Website: </span><a class="value" href="https://cabral-tec.web.app" target="_blank" rel="noopener noreferrer nofollow ugc">https://cabral-tec.web.app</a></div>
                              </div>
                              <div class="profile-text-wrapper  ">
                                 <h6 class="headline type-four">
                                    <div class="background-wrapper">
                                       <span class="icon fixed">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                             <path d="M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5C9.519 1.5 7.5 3.519 7.5 6s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM21.75 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75z"></path>
                                          </svg>
                                       </span>
                                       <span class="text">Profile</span>
                                    </div>
                                 </h6>
                                 <div class="profile-text rich-text-area">
                                    <div>
                                       <div class="description "><span>I'm </span><span>a </span><span>full </span><span>stack </span><span>developer, </span><span>technology </span><span>lover </span><span>❤️🤓. </span><span>Constant </span><span>learner, </span><span>fascinated </span><span>in </span><span>contributing </span><span>to </span><span>the </span><span>development </span><span>of </span><span>systems, </span><span>providing </span><span>business </span><span>improvements, </span><span>acquiring </span><span>and </span><span>sharing </span><span>knowledge.</span></div>
                                    </div>
                                 </div>
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              </div>
                           </div>
                           <div class="column-wrapper rich-text-section kickresume-section-wrapper " id="2b59ea48-0dbb-432d-9123-3794ebd4271a">
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                          <path d="M14.912 15.222c-.237 0-.47-.062-.673-.181L12 13.779l-2.247 1.264a1.316 1.316 0 01-.661.177c-.477 0-.922-.256-1.161-.667a1.348 1.348 0 01-.077-1.19l.88-2.022L7.149 9.78a1.32 1.32 0 01-.401-.931 1.323 1.323 0 01.375-.949c.249-.257.597-.405.955-.405h1.683l1.04-2.044a1.338 1.338 0 011.805-.591c.254.128.464.339.593.592l1.04 2.047h1.668a1.328 1.328 0 011.344 1.299c.009.371-.139.732-.406.99l-1.581 1.556.876 2.012c.142.338.144.704.008 1.034a1.333 1.333 0 01-1.236.832zM12 12.168c.129 0 .256.033.368.097l2.203 1.242-.887-2.037a.754.754 0 01.162-.834l1.664-1.637h-1.731a.745.745 0 01-.668-.41L12 6.404l-1.11 2.182a.747.747 0 01-.668.41H8.49l1.664 1.637c.22.216.285.551.162.834l-.887 2.038 2.204-1.24a.74.74 0 01.367-.097z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Value offered</span>
                                 </div>
                              </h6>
                              <div class="text-area rich-text-area">
                                 <div part="0">
                                    <ul part="0">
                                       <li class="description " part="0"><span>Resumed </span><span>value: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>4 </span><span>years </span><span>of </span><span>experience </span><span>in </span><span>system </span><span>development </span><span>(websites, </span><span>API's, </span></div>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>workers, </span><span>mobile </span><span>applications </span><span>and </span><span>automated </span><span>tests)</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Front-end: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Angular, </span><span>VueJs, </span><span>Angular </span><span>Material, </span><span>Bootstrap, </span><span>BootstrapVue, </span><span>Vuetify</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Back-end: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>.Net, </span><span>.Net </span><span>Core, </span><span>RabbitMQ, </span><span>Entity </span><span>Framework, </span><span>Identity, </span><span>MediatR</span></div>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>SpecFlow, </span><span>XUnit</span></div>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Node, </span><span>Express</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Mobile:	</span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Flutter</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Programming </span><span>languages: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>C#, </span><span>Typescript, </span><span>Dart, </span><span>Javascript, </span><span>C++</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Database: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>SqlServer, </span><span>MongoDb, </span><span>Mysql, </span><span>Firebird, </span><span>PostgresSQL, </span><span>Couchbase(cache)</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Agile </span><span>methodologies: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Scrum </span><span>and </span><span>Kanban</span></div>
                                    <ul part="0">
                                       <li class="description " part="0"><span>Devops </span><span>and </span><span>others: </span></li>
                                    </ul>
                                    <div class="description " part="0"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Azure </span><span>Devops, </span><span>Git, </span><span>Docker, </span><span>Firebase, </span><span>Heroku</span></div>
                                 </div>
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="44ea8e88-c2b3-4a48-909d-8930d2b2dedc">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M23.2 8.3L12.3 3.6c-.2-.1-.4-.1-.6 0L.8 8.3c-.1 0-.2.1-.2.2l-.1.1c0 .1-.1.1-.1.2v7.1c0 .4.4.8.8.8s.8-.4.8-.8v-5.6l2.8 1.1V17c0 .3.2.6.5.7l6.5 2.8c.1 0 .2.1.3.1s.2 0 .3-.1l6.5-2.8c.3-.1.5-.4.5-.7v-5.7l3.9-1.5c.3-.1.5-.4.5-.7s-.3-.7-.6-.8zm-5.5 8.1L12 18.9l-5.7-2.5v-4.5l5.4 2.1c.1 0 .2.1.3.1s.2 0 .3-.1l5.4-2.1v4.5zm-5.7-4L3.2 9 12 5.2 20.8 9 12 12.4z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Education</span>
                                 </div>
                              </h6>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="left-column-wrapper">
                                       <div class="date   "><span>01/2019 – 03/2022</span><span><span>Igarapé</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                                    </div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-info">
                                       <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                       <div class="position">Analysis and systems development | Bachelor's degree</div>
                                       <div class="company-name">Universidade Pitágoras Unopar Anhanguera</div>
                                    </div>
                                    <div class="experience-description">
                                       <div part="0">
                                          <ul part="0">
                                             <li class="description " part="0"><span>FUNDAMENTALS </span><span>that </span><span>deals </span><span>with </span><span>all </span><span>the </span><span>Mathematics </span><span>involved, </span><span>working </span><span>the </span><span>Logic </span><span>and </span><span>Algorithms </span><span>part, </span><span>and </span><span>connecting </span><span>these </span><span>concepts </span><span>in </span><span>a </span><span>solid </span><span>database, </span><span>Data </span><span>Persistence </span><span>and </span><span>Network </span><span>Infrastructure</span></li>
                                             <li class="description " part="0"><span>TECHNICIAN </span><span>with </span><span>languages </span><span>(Structured, </span><span>Script, </span><span>Object </span><span>Oriented, </span><span>Functional) </span><span>exploring </span><span>a </span><span>problem </span><span>decomposition </span><span>(Analysis </span><span>with </span><span>Lean </span><span>techniques), </span><span>its </span><span>modeling </span><span>and </span><span>optimization. </span><span>Concepts </span><span>such </span><span>as </span><span>TDD </span><span>(Test </span><span>Driven </span><span>Development), </span><span>SCRUM, </span><span>UX, </span><span>Kanban, </span><span>Design </span><span>Thinking, </span><span>CI/CD </span><span>(Continuous </span><span>Integration </span><span>and </span><span>Continuous </span><span>Delivery)</span></li>
                                             <li class="description " part="0"><span>TOOLS </span><span>programming </span><span>and </span><span>their </span><span>languages, </span><span>modeling, </span><span>functional </span><span>and </span><span>non-functional </span><span>quality, </span><span>testing, </span><span>orchestration, </span><span>monitoring </span><span>are </span><span>broadly </span><span>addressed</span></li>
                                             <li class="description " part="0"><span>CULTURE </span><span>is </span><span>approached </span><span>as </span><span>a </span><span>cross-discipline </span><span>development, </span><span>focusing </span><span>on </span><span>Agile, </span><span>DevSecOps </span><span>and </span><span>Collaborative </span><span>practices</span></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="42a795f1-f34c-4595-8481-c618070cece5">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M2.25 22.501A2.252 2.252 0 010 20.251v-12a2.252 2.252 0 012.25-2.25h4.558c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5h4.558A2.252 2.252 0 0124 8.251v12a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6.75h-8.25c0 1.24-1.01 2.249-2.25 2.249a2.253 2.253 0 01-2.25-2.249H1.5v6.75zM12 11.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm10.5.751v-3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h8.25V12A2.252 2.252 0 0112 9.75 2.252 2.252 0 0114.25 12v.001h8.25zm-6.828-6c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Work experience</span>
                                 </div>
                              </h6>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="left-column-wrapper">
                                       <div class="date   "><span>07/2021 – present</span><span><span>Belo Horizonte</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                                    </div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-info">
                                       <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                       <div class="position"> .Net | Angular Developer</div>
                                       <div class="company-name">BANK BS2&nbsp;HUB TECNOLOGIA DIGITAL LTDA</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="bottom-ornament"></div>
                        </div>
                     </div>
                     <div class="outer-page multi-page grid-100-center type-one">
                        <div class="page " data-part="2" data-count="3">
                           <div class="top-ornament"></div>
                           <svg class="preview-overlay PreviewOverlay__preview-overlay___rbwwTqTcpq" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1152 210" enable-background="new 0 0 1152 210;">
                              <g>
                                 <path d="M139.5,69.4c0,20.5-6.4,36.2-19.2,47c-12.8,10.9-31,16.3-54.6,16.3H48.3v67.7H8V10h60.8c23.1,0,40.7,5,52.7,14.9 C133.5,34.9,139.5,49.7,139.5,69.4z M48.3,99.7h13.3c12.4,0,21.7-2.5,27.9-7.4c6.2-4.9,9.2-12,9.2-21.4c0-9.5-2.6-16.5-7.7-21 c-5.2-4.5-13.3-6.8-24.3-6.8H48.3V99.7z"></path>
                                 <path d="M215.8,127.4v73.1h-40.4V10H231c25.9,0,45,4.7,57.4,14.1c12.4,9.4,18.6,23.7,18.6,42.9c0,11.2-3.1,21.2-9.2,29.9 c-6.2,8.7-14.9,15.6-26.2,20.5c28.7,42.8,47.3,70.5,56,83h-44.8l-45.5-73.1H215.8z M215.8,94.6h13c12.8,0,22.2-2.1,28.3-6.4 c6.1-4.3,9.1-10.9,9.1-20.1c0-9-3.1-15.5-9.3-19.3c-6.2-3.8-15.8-5.7-28.9-5.7h-12.2V94.6z"></path>
                                 <path d="M461.2,200.5H351.6V10h109.7v33.1h-69.3v41.8h64.5V118h-64.5v49.1h69.3V200.5z"></path>
                                 <path d="M609.6,10h40.8l-64.7,190.4h-44L477,10h40.8l35.8,113.3c2,6.7,4.1,14.5,6.2,23.4c2.1,8.9,3.5,15.1,4,18.6 c1-8,4.2-22,9.8-41.9L609.6,10z"></path>
                                 <path d="M674.3,200.5V10h40.4v190.4H674.3z"></path>
                                 <path d="M872.3,200.5H762.6V10h109.7v33.1H803v41.8h64.5V118H803v49.1h69.3V200.5z"></path>
                                 <path d="M1097.5,200.5h-46l-25.8-100c-1-3.6-2.6-10.9-4.9-22.1c-2.3-11.2-3.6-18.6-4-22.5c-0.5,4.7-1.8,12.2-3.9,22.6 c-2.1,10.4-3.7,17.8-4.8,22.2l-25.7,99.8h-45.8L888.1,10h39.7L952.1,114c4.3,19.2,7.3,35.8,9.2,49.9c0.5-4.9,1.7-12.6,3.6-23 c1.9-10.4,3.6-18.4,5.3-24.2L998,10h38.2l27.7,106.7c1.2,4.8,2.7,12.1,4.6,21.9c1.8,9.8,3.2,18.2,4.2,25.3 c0.9-6.8,2.3-15.2,4.2-25.3c1.9-10.1,3.6-18.3,5.2-24.6L1106.2,10h39.7L1097.5,200.5z"></path>
                              </g>
                           </svg>
                           <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="42a795f1-f34c-4595-8481-c618070cece5">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M2.25 22.501A2.252 2.252 0 010 20.251v-12a2.252 2.252 0 012.25-2.25h4.558c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5h4.558A2.252 2.252 0 0124 8.251v12a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6.75h-8.25c0 1.24-1.01 2.249-2.25 2.249a2.253 2.253 0 01-2.25-2.249H1.5v6.75zM12 11.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm10.5.751v-3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h8.25V12A2.252 2.252 0 0112 9.75 2.252 2.252 0 0114.25 12v.001h8.25zm-6.828-6c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Work experience</span>
                                 </div>
                              </h6>
                              <div class="experience-item">
                                 <div class="column left-column-render"></div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div part="0">
                                          <div class="description " part="0"><span>-Development </span><span>of </span><span>new </span><span>features </span><span>and </span><span>maintenance </span><span>of </span><span>company </span><span>systems </span><span>based </span><span>on </span><span>the </span><span>.Net </span><span>Core </span><span>and </span><span>Angular</span></div>
                                          <ul part="0">
                                             <li class="description " part="0"><span>.NET </span><span>Core </span><span>· </span><span>Angular </span><span>(Framework) </span><span>· </span><span>RabbitMQ </span><span>· </span><span>Azure </span><span>DevOps </span><span>· </span><span>Microsoft </span><span>SQL </span><span>Server</span></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="left-column-wrapper">
                                       <div class="date   "><span>10/2020 – 07/2021</span><span><span>Belo Horizonte</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                                    </div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-info">
                                       <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                       <div class="position"> .Net | Angular Developer</div>
                                       <div class="company-name">SIX TECH TECNOLOGIA E PARTICIPAÇÕES S/A</div>
                                    </div>
                                    <div class="experience-description">
                                       <div part="0">
                                          <div class="description " part="0"><span>- </span><span>Development </span><span>of </span><span>new </span><span>features </span><span>and </span><span>maintenance </span><span>of </span><span>company </span><span>systems </span><span>based </span><span>on </span><span>the </span><span>.Net </span><span>Core </span><span>and </span><span>Angular</span></div>
                                          <div class="description " part="0"><span>- </span><span>Maintenance </span><span>of </span><span>software </span><span>legacy </span><span>made </span><span>with </span><span>.NET </span><span>MVC</span></div>
                                          <ul part="0">
                                             <li class="description " part="0"><span>MongoDB </span><span>· </span><span>.NET </span><span>Core </span><span>· </span><span>Angular </span><span>(Framework) </span><span>· </span><span>Azure </span><span>DevOps</span></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="left-column-wrapper">
                                       <div class="date   "><span>04/2019 – 10/2020</span><span><span>Betim</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                                    </div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-info">
                                       <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                       <div class="position"> .Net | Vue.js Developer - Junior</div>
                                       <div class="company-name">DONUZ SERVICOS DE INFORMATICA LTDA</div>
                                    </div>
                                    <div class="experience-description">
                                       <div part="0">
                                          <div class="description " part="0"><span>- </span><span>Development </span><span>and </span><span>maintenance </span><span>of </span><span>software </span><span>to </span><span>perform </span><span>integrations </span><span>between </span><span>the </span><span>Donuz </span><span>system </span><span>and </span><span>third-party </span><span>systems </span><span>using </span><span>.Net. </span><span>The </span><span>integrations </span><span>were </span><span>made </span><span>through </span><span>Rest </span><span>APIs, </span><span>reading </span><span>of </span><span>database </span><span>and </span><span>worksheets.</span></div>
                                          <div class="description " part="0"><span>- </span><span>Development </span><span>and </span><span>maintenance </span><span>of </span><span>applications </span><span>for </span><span>web, </span><span>using </span><span>Vue.js</span></div>
                                          <ul part="0">
                                             <li class="description " part="0"><span>.NET </span><span>Framework </span><span>· </span><span>Vuejs </span><span>· </span><span>Microsoft </span><span>SQL </span><span>Server </span><span>· </span><span>MySQL </span><span>· </span><span>PostgreSQL</span></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="left-column-wrapper">
                                       <div class="date   "><span>01/2011 – 05/2018</span><span><span>Igarapé</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                                    </div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-info">
                                       <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                       <div class="position">Administrative Assistant</div>
                                       <div class="company-name">SUPERMERCADO MAIA PIMENTA LTDA</div>
                                    </div>
                                    <div class="experience-description">
                                       <div part="0">
                                          <ul part="0">
                                             <li class="description " part="0"><span> </span><span>Maintenance </span><span>of </span><span>company </span><span>computers</span></li>
                                             <li class="description " part="0"><span>Network </span><span>Settings</span></li>
                                             <li class="description " part="0"><span>Creation </span><span>of </span><span>spreadsheets </span><span>in </span><span>Excel, </span><span>arts </span><span>with </span><span>Publisher, </span><span>text </span><span>editing </span><span>with </span><span>Word</span></li>
                                             <li class="description " part="0"><span>Tax </span><span>calculation, </span><span>release </span><span>and </span><span>issuance </span><span>of </span><span>invoices.</span></li>
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper skill-section type-one  column-wrapper " id="43cab7df-fb29-4314-93ca-3ba29c0bede9">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M4.002 24a3.736 3.736 0 01-2.039-.606 3.755 3.755 0 01-1.101-5.188L7.478 8.028V1.5h-.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-.75v6.528l6.616 10.179c.396.61.606 1.316.606 2.043a3.73 3.73 0 01-1.098 2.652A3.728 3.728 0 0119.95 24H4.002zM2.12 19.024a2.253 2.253 0 001.883 3.477H19.95c.601 0 1.166-.234 1.591-.659a2.244 2.244 0 00.295-2.817l-3.59-5.524H5.71l-3.59 5.523zM17.271 12l-2.172-3.341a.75.75 0 01-.121-.409V7.5h-2.25a.75.75 0 010-1.5h2.25V4.5h-2.25a.75.75 0 010-1.5h2.25V1.5h-6v6.75a.75.75 0 01-.121.409L6.685 12h10.586z"></path>
                                          <path d="M15.728 19.5a.75.75 0 01-.75-.75V18h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zm-9.001 1.125a.748.748 0 01-.133-.012 1.126 1.126 0 01-.98-.982.717.717 0 01-.001-.262c.06-.513.47-.922.983-.983a.796.796 0 01.258 0c.514.059.924.469.985.983a.717.717 0 010 .262c-.06.512-.468.921-.98.982a.704.704 0 01-.132.012zm3-3a.748.748 0 01-.133-.012 1.126 1.126 0 01-.98-.982.717.717 0 01-.001-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.568.066.995.542.995 1.114a.817.817 0 01-.013.139 1.128 1.128 0 01-.979.974.704.704 0 01-.132.012z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Skills</span>
                                 </div>
                              </h6>
                              <div class="skill-category column-wrapper">
                                 <div class="skill-wrapper">
                                    <div class="skill-category-name ">Front-end</div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                    <div class="skills">
                                       <div class="skill ">
                                          <div class="skill-name">Angular</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">VueJs</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="skill-category column-wrapper">
                                 <div class="skill-wrapper">
                                    <div class="skill-category-name ">Back-end</div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                    <div class="skills">
                                       <div class="skill ">
                                          <div class="skill-name">.Net</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">.Net Core</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">Node</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="skill-category column-wrapper">
                                 <div class="skill-wrapper">
                                    <div class="skill-category-name ">Mobile</div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                    <div class="skills">
                                       <div class="skill ">
                                          <div class="skill-name">Flutter</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="skill-category column-wrapper">
                                 <div class="skill-wrapper">
                                    <div class="skill-category-name ">Devops and others</div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                    <div class="skills">
                                       <div class="skill ">
                                          <div class="skill-name">Azure Devops</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">Firebase</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">Heroku </div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">Docker</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">Git</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="skill-category column-wrapper">
                                 <div class="skill-wrapper">
                                    <div class="skill-category-name ">Agile Methodologies</div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                    <div class="skills">
                                       <div class="skill ">
                                          <div class="skill-name">Scrum </div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">Kanban</div>
                                          <div class="skill-description-wrapper ">
                                             <div class="skill-description">
                                                <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="05ae758a-5f25-4279-bf55-b0e9efb08486">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                          <path d="M10.5 14.25c-.4 0-.776-.156-1.059-.438l-1.721-1.72a.752.752 0 01.531-1.281c.2 0 .388.078.53.219l1.72 1.719L15.97 7.28a.744.744 0 011.06 0 .744.744 0 010 1.06l-5.47 5.469a1.486 1.486 0 01-1.059.439l-.001.002z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Certifications</span>
                                 </div>
                              </h6>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">11/2020</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Rich Domain Modeling</div>
                                       <div class="publisher">desenvolvedor.io</div>
                                       <div class="url"><a href="https://desenvolvedor.io/certificado/0268b20e-e227-439c-af08-f6f359febb0a" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/0268b20e-e227-439c-af08-f6f359febb0a</a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">10/2020</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Getting Started with ASP.NET Core</div>
                                       <div class="publisher">desenvolvedor.io</div>
                                       <div class="url"><a href="https://desenvolvedor.io/certificado/017a5208-6b3c-4d7f-a707-66a5021745ec" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/017a5208-6b3c-4d7f-a707-66a5021745ec</a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="bottom-ornament"></div>
                        </div>
                     </div>
                     <div class="outer-page multi-page grid-100-center type-one">
                        <div class="page " data-part="3" data-count="3">
                           <div class="top-ornament"></div>
                           <svg class="preview-overlay PreviewOverlay__preview-overlay___rbwwTqTcpq" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1152 210" enable-background="new 0 0 1152 210;">
                              <g>
                                 <path d="M139.5,69.4c0,20.5-6.4,36.2-19.2,47c-12.8,10.9-31,16.3-54.6,16.3H48.3v67.7H8V10h60.8c23.1,0,40.7,5,52.7,14.9 C133.5,34.9,139.5,49.7,139.5,69.4z M48.3,99.7h13.3c12.4,0,21.7-2.5,27.9-7.4c6.2-4.9,9.2-12,9.2-21.4c0-9.5-2.6-16.5-7.7-21 c-5.2-4.5-13.3-6.8-24.3-6.8H48.3V99.7z"></path>
                                 <path d="M215.8,127.4v73.1h-40.4V10H231c25.9,0,45,4.7,57.4,14.1c12.4,9.4,18.6,23.7,18.6,42.9c0,11.2-3.1,21.2-9.2,29.9 c-6.2,8.7-14.9,15.6-26.2,20.5c28.7,42.8,47.3,70.5,56,83h-44.8l-45.5-73.1H215.8z M215.8,94.6h13c12.8,0,22.2-2.1,28.3-6.4 c6.1-4.3,9.1-10.9,9.1-20.1c0-9-3.1-15.5-9.3-19.3c-6.2-3.8-15.8-5.7-28.9-5.7h-12.2V94.6z"></path>
                                 <path d="M461.2,200.5H351.6V10h109.7v33.1h-69.3v41.8h64.5V118h-64.5v49.1h69.3V200.5z"></path>
                                 <path d="M609.6,10h40.8l-64.7,190.4h-44L477,10h40.8l35.8,113.3c2,6.7,4.1,14.5,6.2,23.4c2.1,8.9,3.5,15.1,4,18.6 c1-8,4.2-22,9.8-41.9L609.6,10z"></path>
                                 <path d="M674.3,200.5V10h40.4v190.4H674.3z"></path>
                                 <path d="M872.3,200.5H762.6V10h109.7v33.1H803v41.8h64.5V118H803v49.1h69.3V200.5z"></path>
                                 <path d="M1097.5,200.5h-46l-25.8-100c-1-3.6-2.6-10.9-4.9-22.1c-2.3-11.2-3.6-18.6-4-22.5c-0.5,4.7-1.8,12.2-3.9,22.6 c-2.1,10.4-3.7,17.8-4.8,22.2l-25.7,99.8h-45.8L888.1,10h39.7L952.1,114c4.3,19.2,7.3,35.8,9.2,49.9c0.5-4.9,1.7-12.6,3.6-23 c1.9-10.4,3.6-18.4,5.3-24.2L998,10h38.2l27.7,106.7c1.2,4.8,2.7,12.1,4.6,21.9c1.8,9.8,3.2,18.2,4.2,25.3 c0.9-6.8,2.3-15.2,4.2-25.3c1.9-10.1,3.6-18.3,5.2-24.6L1106.2,10h39.7L1097.5,200.5z"></path>
                              </g>
                           </svg>
                           <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="05ae758a-5f25-4279-bf55-b0e9efb08486">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                          <path d="M10.5 14.25c-.4 0-.776-.156-1.059-.438l-1.721-1.72a.752.752 0 01.531-1.281c.2 0 .388.078.53.219l1.72 1.719L15.97 7.28a.744.744 0 011.06 0 .744.744 0 010 1.06l-5.47 5.469a1.486 1.486 0 01-1.059.439l-.001.002z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Certifications</span>
                                 </div>
                              </h6>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">10/2020</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Introduction to Entity Framework Core</div>
                                       <div class="publisher">desenvolvedor.io</div>
                                       <div class="url"><a href="https://desenvolvedor.io/certificado/eefe5cd1-5ddf-4564-8ea2-f78a1d840557" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/eefe5cd1-5ddf-4564-8ea2-f78a1d840557</a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">03/2020</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Building Android and iOS Apps with Flutter</div>
                                       <div class="publisher">Udemy</div>
                                       <div class="url"><a href="https://github.com/CabralPro/MEUS_CERTIFICADOS/blob/main/Cria%C3%A7%C3%A3o%20de%20apps%20com%20Flutter.jpg?raw=true" target="_blank" rel="noopener noreferrer nofollow ugc">https://github.com/CabralPro/MEUS_CERTIFICADOS/blob/main/Cria%C3%A7%C3%A3o%20de%20apps%20com%20Flutter.jpg?raw=true</a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">03/2020</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Modern Web Course with JavaScript 2020 FULL</div>
                                       <div class="publisher">Udemy</div>
                                       <div class="url"><a href="https://raw.githubusercontent.com/CabralPro/MEUS_CERTIFICADOS/main/Web%20Moderno.jpg" target="_blank" rel="noopener noreferrer nofollow ugc">https://raw.githubusercontent.com/CabralPro/MEUS_CERTIFICADOS/main/Web%20Moderno.jpg</a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">01/2020</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name"> Flexbox</div>
                                       <div class="publisher">Alura</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">10/2019</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Web Performance</div>
                                       <div class="publisher">Alura</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">03/2019</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Java course</div>
                                       <div class="publisher">Curso em Video</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">02/2019</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">HTML 5 e CSS3</div>
                                       <div class="publisher">Curso em Video</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">01/2019</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">MYSQL course</div>
                                       <div class="publisher">Curso em Video</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">08/2018</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">POO Java</div>
                                       <div class="publisher">Curso em Video</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info">
                                       <div class="date">07/2018</div>
                                    </div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">Programming algorithm and logic</div>
                                       <div class="publisher">Curso em Video</div>
                                       <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper skill-section type-one  column-wrapper " id="492e9995-1a34-4271-a7a0-b39567814962">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M10.071 24a.75.75 0 01-.708-.998A7.49 7.49 0 0116.405 18a7.496 7.496 0 017.052 5.001.75.75 0 11-1.415.498 5.963 5.963 0 00-4.885-3.947v3.698a.75.75 0 01-1.5 0v-3.697a5.963 5.963 0 00-4.878 3.946.753.753 0 01-.708.501zm6.336-6a4.88 4.88 0 01-4.875-4.875 4.867 4.867 0 01.684-2.479 4.898 4.898 0 014.191-2.396c2.384 0 4.449 1.774 4.812 4.13a.75.75 0 01.025.166c.025.212.038.401.038.579A4.88 4.88 0 0116.407 18zm-3.27-5.713a3.379 3.379 0 003.269 4.213 3.38 3.38 0 003.34-2.885 7.636 7.636 0 01-6.609-1.328zm.711-1.357a6.104 6.104 0 003.952 1.435c.621 0 1.231-.093 1.817-.277a3.395 3.395 0 00-3.21-2.338c-.986 0-1.92.436-2.559 1.18zm-4.191.32a.753.753 0 01-.45-.15L6.407 9h-4.25a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 012.157 0h9a2.252 2.252 0 012.25 2.25v4.5A2.252 2.252 0 0111.157 9h-.75v1.5a.747.747 0 01-.75.75zm-7.5-9.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5c.161 0 .321.053.45.15L8.907 9v-.75a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"></path>
                                          <path d="M3.657 3.75a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75zm0 2.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.5 19.5c-2.068 0-3.75-1.682-3.75-3.75S3.432 12 5.5 12s3.75 1.682 3.75 3.75S7.567 19.5 5.5 19.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.259 18 5.5 18s2.25-1.009 2.25-2.25S6.74 13.5 5.5 13.5zM1.276 24a.751.751 0 01-.676-.425.74.74 0 01-.031-.573A5.245 5.245 0 015.5 19.501c1.12 0 2.222.366 3.112 1.031a.74.74 0 01.293.494.742.742 0 01-.141.556.756.756 0 01-.601.301.744.744 0 01-.448-.149A3.71 3.71 0 005.507 21a3.744 3.744 0 00-3.524 2.499.75.75 0 01-.707.501z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Languages</span>
                                 </div>
                              </h6>
                              <div class="skill-category column-wrapper">
                                 <div class="skill-wrapper">
                                    <div class="skill-category-name "><br></div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                    <div class="skills">
                                       <div class="skill ">
                                          <div class="skill-name">Portuguese</div>
                                          <div class="skill-description-wrapper text">
                                             <div class="skill-description">Native</div>
                                          </div>
                                       </div>
                                       <div class="skill ">
                                          <div class="skill-name">English</div>
                                          <div class="skill-description-wrapper text">
                                             <div class="skill-description">Advanced</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="80c6eeca-ab27-41e1-b789-142796ba94d3">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M5.25 24c-1.654 0-3-1.346-3-3V5.25A3.754 3.754 0 016 1.5h5.379A2.258 2.258 0 0113.5 0h3c.96 0 1.808.615 2.121 1.5h1.629c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5v3H21a.75.75 0 010 1.5H5.25zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h13.5v-3H5.25zM6 3a2.252 2.252 0 00-2.25 2.25v13.151A2.973 2.973 0 015.25 18h15V3h-1.5v9.75a.75.75 0 01-1.28.53L15 10.811l-2.47 2.47a.746.746 0 01-.817.162.746.746 0 01-.462-.693V3H6zm9 6c.2 0 .389.078.53.22l1.72 1.72V2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v8.689l1.72-1.72A.746.746 0 0115 9z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Publications</span>
                                 </div>
                              </h6>
                              <div class="experience-item">
                                 <div class="column left-column-render">
                                    <div class="experience-info"></div>
                                    <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 </div>
                                 <div class="column right-column-render">
                                    <div class="experience-description">
                                       <div class="publication-name">My programming youtube channel</div>
                                       <div class="publisher"></div>
                                       <div class="url"><a href="https://www.youtube.com/channel/UCm1y-992LKdzMs9E8edj7eA/videos" target="_blank" rel="noopener noreferrer nofollow ugc">https://www.youtube.com/channel/UCm1y-992LKdzMs9E8edj7eA/videos</a></div>
                                       <div>
                                          <div class="description "></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="kickresume-section-wrapper social-section sec-al-left column-wrapper " id="94278bae-7d20-4686-b9e6-62b348254403">
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <h6 class="headline type-four">
                                 <div class="background-wrapper">
                                    <span class="icon fixed">
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M18.75 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 0121.75 24h-3zm4.5-18a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0124 2.25v3a.75.75 0 01-.75.75zM.75 6A.75.75 0 010 5.25v-3A2.252 2.252 0 012.25 0h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v3A.75.75 0 01.75 6zm1.5 18A2.252 2.252 0 010 21.75v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3zM12 13.875c-2.688 0-4.875-2.187-4.875-4.875S9.312 4.125 12 4.125 16.875 6.312 16.875 9 14.688 13.875 12 13.875zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375s1.514 3.375 3.375 3.375S15.375 10.861 15.375 9 13.861 5.625 12 5.625z"></path>
                                          <path d="M18.365 19.875a.752.752 0 01-.707-.5 5.961 5.961 0 00-3.072-3.415 5.95 5.95 0 00-4.587-.243 5.975 5.975 0 00-3.658 3.658.752.752 0 01-.957.457.75.75 0 01-.457-.957 7.467 7.467 0 014.572-4.572 7.443 7.443 0 015.733.303 7.448 7.448 0 013.839 4.269.745.745 0 01-.03.573.744.744 0 01-.676.427z"></path>
                                       </svg>
                                    </span>
                                    <span class="text">Social networks</span>
                                 </div>
                              </h6>
                              <div class="social-links-wrapper">
                                 <a href="https://www.linkedin.com/in/arthurcabrallemos/" target="_blank" class="social-link type-one-b" rel="noopener noreferrer nofollow ugc">
                                    <div class="icon">
                                       <svg data-name="Outline Version" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M.81 7.95a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h4.86a.75.75 0 00.75-.75V8.7a.75.75 0 00-.75-.75zm4.11 13.93H1.56V9.45h3.36zM17.89 7.94a7.35 7.35 0 00-3.53.93V8.7a.75.75 0 00-.75-.75h-5.1a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h5.11a.75.75 0 00.75-.75v-7.25a1.39 1.39 0 012.79 0v7.25a.75.75 0 00.75.75h5.36a.75.75 0 00.75-.75V15.5c-.02-4.67-2.35-7.56-6.13-7.56zm4.62 13.94h-3.86v-6.5a2.89 2.89 0 00-5.79 0v6.5h-3.6V9.45h3.61v.84a.75.75 0 001.26.55 6.07 6.07 0 013.77-1.4c2.93 0 4.62 2.21 4.62 6.06zM3.24 7.13A3.25 3.25 0 100 3.88a3.25 3.25 0 003.24 3.25zm0-5a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75z"></path>
                                       </svg>
                                    </div>
                                    <div class="description">@ArthurCabral</div>
                                 </a>
                                 <a href="https://github.com/CabralPro" target="_blank" class="social-link type-one-b" rel="noopener noreferrer nofollow ugc">
                                    <div class="icon">
                                       <svg data-name="Outline Version" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                          <path d="M12 0a12 12 0 00-3.41 23.5 1.25 1.25 0 001.61-1.2V20a.75.75 0 00-.91-.73A2 2 0 016.66 18l-.11-.27.18.13a2.62 2.62 0 003.06.5.75.75 0 00.44-.58 4.84 4.84 0 01.38-1.36.75.75 0 00-.41-1.31c-2.4-.27-3.85-.66-3.85-3.66a3.1 3.1 0 01.83-2.15.75.75 0 00.14-.79 2.65 2.65 0 01-.06-1.57A5.46 5.46 0 019 7.81a.76.76 0 00.62.1 8.76 8.76 0 012.28-.31 8.67 8.67 0 012.29.31.75.75 0 00.62-.1 5.63 5.63 0 011.76-.87 2.66 2.66 0 01-.05 1.57.75.75 0 00.14.79 3.09 3.09 0 01.82 2.15c0 3-1.46 3.38-3.86 3.65a.75.75 0 00-.64.52.74.74 0 00.22.79 3.61 3.61 0 01.43 1.77v4.17a1.25 1.25 0 001.25 1.25 1.19 1.19 0 00.34 0A12 12 0 0012 0zm3.16 22v-3.82a5.94 5.94 0 00-.27-1.72c1.93-.31 4.12-1.18 4.12-5a4.62 4.62 0 00-.93-2.83 4.52 4.52 0 00-.24-2.73.75.75 0 00-.47-.44c-.26-.08-1.24-.25-3.09.92a10.19 10.19 0 00-4.7 0c-1.85-1.18-2.83-1-3.09-.92A.75.75 0 006 5.9a4.51 4.51 0 00-.24 2.73 4.62 4.62 0 00-.93 2.83c0 3.83 2.21 4.69 4.14 5-.07.24-.13.47-.17.66-.42.11-.65-.06-1.2-.47a7.19 7.19 0 00-2.81-1.38.75.75 0 00-.74 1.22 5.23 5.23 0 011.17 2 3.52 3.52 0 003.48 2.4V22a10.5 10.5 0 116.46 0z"></path>
                                       </svg>
                                    </div>
                                    <div class="description">CabralPro</div>
                                 </a>
                              </div>
                           </div>
                           <div class="bottom-ornament"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <script src="https://d1civoyjepycei.cloudfront.net/static/js/sentry.conf.902d3fdb86d2.js"></script>
      <script type="text/javascript">
         window.environment = 'production';
         window.allowed_origin = "*";
         if (!window.version) {
           window.version = 'development';
         }
      </script>
      <link href="https://d1civoyjepycei.cloudfront.net/static/assets/bundle/css/iframe-preview.254a77c1.css" rel="stylesheet">
      <script src="https://d1civoyjepycei.cloudfront.net/static/assets/bundle/js/iframe-preview.06ecb466.js"></script>
      <script src="chrome-extension://lopnbnfpjmgpbppclhclehhgafnifija/aiscripts/t.js"></script><script src="chrome-extension://lopnbnfpjmgpbppclhclehhgafnifija/aiscripts/script-main.js"></script>
      <div style="overflow: hidden; max-height: 1px; position: absolute; top: 0;">
         <div style="opacity: 0;-moz-opacity: 0;filter: alpha(opacity=0);">
            <div class="template render stanford a4 fcn-fcn fs-13 lh-16 win" style="width: 794px;">
               <div class="outer-page grid-100-center type-one">
                  <div class="page first-page" data-part="1" data-count="0">
                     <div class="top-ornament"></div>
                     <svg class="preview-overlay PreviewOverlay__preview-overlay___rbwwTqTcpq" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1152 210" enable-background="new 0 0 1152 210;">
                        <g>
                           <path d="M139.5,69.4c0,20.5-6.4,36.2-19.2,47c-12.8,10.9-31,16.3-54.6,16.3H48.3v67.7H8V10h60.8c23.1,0,40.7,5,52.7,14.9 C133.5,34.9,139.5,49.7,139.5,69.4z M48.3,99.7h13.3c12.4,0,21.7-2.5,27.9-7.4c6.2-4.9,9.2-12,9.2-21.4c0-9.5-2.6-16.5-7.7-21 c-5.2-4.5-13.3-6.8-24.3-6.8H48.3V99.7z"></path>
                           <path d="M215.8,127.4v73.1h-40.4V10H231c25.9,0,45,4.7,57.4,14.1c12.4,9.4,18.6,23.7,18.6,42.9c0,11.2-3.1,21.2-9.2,29.9 c-6.2,8.7-14.9,15.6-26.2,20.5c28.7,42.8,47.3,70.5,56,83h-44.8l-45.5-73.1H215.8z M215.8,94.6h13c12.8,0,22.2-2.1,28.3-6.4 c6.1-4.3,9.1-10.9,9.1-20.1c0-9-3.1-15.5-9.3-19.3c-6.2-3.8-15.8-5.7-28.9-5.7h-12.2V94.6z"></path>
                           <path d="M461.2,200.5H351.6V10h109.7v33.1h-69.3v41.8h64.5V118h-64.5v49.1h69.3V200.5z"></path>
                           <path d="M609.6,10h40.8l-64.7,190.4h-44L477,10h40.8l35.8,113.3c2,6.7,4.1,14.5,6.2,23.4c2.1,8.9,3.5,15.1,4,18.6 c1-8,4.2-22,9.8-41.9L609.6,10z"></path>
                           <path d="M674.3,200.5V10h40.4v190.4H674.3z"></path>
                           <path d="M872.3,200.5H762.6V10h109.7v33.1H803v41.8h64.5V118H803v49.1h69.3V200.5z"></path>
                           <path d="M1097.5,200.5h-46l-25.8-100c-1-3.6-2.6-10.9-4.9-22.1c-2.3-11.2-3.6-18.6-4-22.5c-0.5,4.7-1.8,12.2-3.9,22.6 c-2.1,10.4-3.7,17.8-4.8,22.2l-25.7,99.8h-45.8L888.1,10h39.7L952.1,114c4.3,19.2,7.3,35.8,9.2,49.9c0.5-4.9,1.7-12.6,3.6-23 c1.9-10.4,3.6-18.4,5.3-24.2L998,10h38.2l27.7,106.7c1.2,4.8,2.7,12.1,4.6,21.9c1.8,9.8,3.2,18.2,4.2,25.3 c0.9-6.8,2.3-15.2,4.2-25.3c1.9-10.1,3.6-18.3,5.2-24.6L1106.2,10h39.7L1097.5,200.5z"></path>
                        </g>
                     </svg>
                     <div class="bottom-ornament"></div>
                  </div>
               </div>
               <div class="outer-page grid-100-center type-one">
                  <div class="page first-page" data-part="1" data-count="0">
                     <div class="top-ornament"></div>
                     <svg class="preview-overlay PreviewOverlay__preview-overlay___rbwwTqTcpq" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1152 210" enable-background="new 0 0 1152 210;">
                        <g>
                           <path d="M139.5,69.4c0,20.5-6.4,36.2-19.2,47c-12.8,10.9-31,16.3-54.6,16.3H48.3v67.7H8V10h60.8c23.1,0,40.7,5,52.7,14.9 C133.5,34.9,139.5,49.7,139.5,69.4z M48.3,99.7h13.3c12.4,0,21.7-2.5,27.9-7.4c6.2-4.9,9.2-12,9.2-21.4c0-9.5-2.6-16.5-7.7-21 c-5.2-4.5-13.3-6.8-24.3-6.8H48.3V99.7z"></path>
                           <path d="M215.8,127.4v73.1h-40.4V10H231c25.9,0,45,4.7,57.4,14.1c12.4,9.4,18.6,23.7,18.6,42.9c0,11.2-3.1,21.2-9.2,29.9 c-6.2,8.7-14.9,15.6-26.2,20.5c28.7,42.8,47.3,70.5,56,83h-44.8l-45.5-73.1H215.8z M215.8,94.6h13c12.8,0,22.2-2.1,28.3-6.4 c6.1-4.3,9.1-10.9,9.1-20.1c0-9-3.1-15.5-9.3-19.3c-6.2-3.8-15.8-5.7-28.9-5.7h-12.2V94.6z"></path>
                           <path d="M461.2,200.5H351.6V10h109.7v33.1h-69.3v41.8h64.5V118h-64.5v49.1h69.3V200.5z"></path>
                           <path d="M609.6,10h40.8l-64.7,190.4h-44L477,10h40.8l35.8,113.3c2,6.7,4.1,14.5,6.2,23.4c2.1,8.9,3.5,15.1,4,18.6 c1-8,4.2-22,9.8-41.9L609.6,10z"></path>
                           <path d="M674.3,200.5V10h40.4v190.4H674.3z"></path>
                           <path d="M872.3,200.5H762.6V10h109.7v33.1H803v41.8h64.5V118H803v49.1h69.3V200.5z"></path>
                           <path d="M1097.5,200.5h-46l-25.8-100c-1-3.6-2.6-10.9-4.9-22.1c-2.3-11.2-3.6-18.6-4-22.5c-0.5,4.7-1.8,12.2-3.9,22.6 c-2.1,10.4-3.7,17.8-4.8,22.2l-25.7,99.8h-45.8L888.1,10h39.7L952.1,114c4.3,19.2,7.3,35.8,9.2,49.9c0.5-4.9,1.7-12.6,3.6-23 c1.9-10.4,3.6-18.4,5.3-24.2L998,10h38.2l27.7,106.7c1.2,4.8,2.7,12.1,4.6,21.9c1.8,9.8,3.2,18.2,4.2,25.3 c0.9-6.8,2.3-15.2,4.2-25.3c1.9-10.1,3.6-18.3,5.2-24.6L1106.2,10h39.7L1097.5,200.5z"></path>
                        </g>
                     </svg>
                     <div class="general-section ">
                        <h2 class="name "><span> Arthur Cabral Lemos </span></h2>
                        <div class="general-info">
                           <div class="info-wrapper"><span class="key ">Birth date: </span><span class="value">1994/10/15</span></div>
                           <div class="info-wrapper"><span class="key ">Nationality: </span><span class="value">Brazilian</span></div>
                           <div class="info-wrapper"><span class="key ">Address: </span><span class="value">Igarapé - MG 32900000, Brazil</span></div>
                           <div class="info-wrapper"><span class="key ">Phone number: </span><a class="value" href="tel:+55 31 9 9876-2713">+55 31 9 9876-2713</a></div>
                           <div class="info-wrapper"><span class="key ">Email address: </span><a class="value" href="mailto:acl_360@yahoo.com.br" target="_blank" rel="noopener noreferrer nofollow ugc">acl_360<wbr>@yahoo.com.br</a></div>
                           <div class="info-wrapper"><span class="key ">Website: </span><a class="value" href="https://cabral-tec.web.app" target="_blank" rel="noopener noreferrer nofollow ugc">https://cabral-tec.web.app</a></div>
                        </div>
                        <div class="profile-text-wrapper  ">
                           <h6 class="headline type-four">
                              <div class="background-wrapper">
                                 <span class="icon fixed">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                       <path d="M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5C9.519 1.5 7.5 3.519 7.5 6s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM21.75 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75z"></path>
                                    </svg>
                                 </span>
                                 <span class="text">Profile</span>
                              </div>
                           </h6>
                           <div class="profile-text rich-text-area">
                              <div>
                                 <div class="description "><span>I'm </span><span>a </span><span>full </span><span>stack </span><span>developer, </span><span>technology </span><span>lover </span><span>❤️🤓. </span><span>Constant </span><span>learner, </span><span>fascinated </span><span>in </span><span>contributing </span><span>to </span><span>the </span><span>development </span><span>of </span><span>systems, </span><span>providing </span><span>business </span><span>improvements, </span><span>acquiring </span><span>and </span><span>sharing </span><span>knowledge.</span></div>
                              </div>
                           </div>
                           <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        </div>
                     </div>
                     <div class="general-section ">
                        <h2 class="name "><span> Arthur Cabral Lemos </span></h2>
                        <div class="general-info">
                           <div class="info-wrapper"><span class="key ">Birth date: </span><span class="value">1994/10/15</span></div>
                           <div class="info-wrapper"><span class="key ">Nationality: </span><span class="value">Brazilian</span></div>
                           <div class="info-wrapper"><span class="key ">Address: </span><span class="value">Igarapé - MG 32900000, Brazil</span></div>
                           <div class="info-wrapper"><span class="key ">Phone number: </span><a class="value" href="tel:+55 31 9 9876-2713">+55 31 9 9876-2713</a></div>
                           <div class="info-wrapper"><span class="key ">Email address: </span><a class="value" href="mailto:acl_360@yahoo.com.br" target="_blank" rel="noopener noreferrer nofollow ugc">acl_360<wbr>@yahoo.com.br</a></div>
                           <div class="info-wrapper"><span class="key ">Website: </span><a class="value" href="https://cabral-tec.web.app" target="_blank" rel="noopener noreferrer nofollow ugc">https://cabral-tec.web.app</a></div>
                        </div>
                        <div class="profile-text-wrapper  ">
                           <h6 class="headline type-four">
                              <div class="background-wrapper">
                                 <span class="icon fixed">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                       <path d="M12 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5C9.519 1.5 7.5 3.519 7.5 6s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zM21.75 24a.75.75 0 01-.75-.75c0-4.963-4.037-9-9-9s-9 4.037-9 9a.75.75 0 01-1.5 0c0-5.79 4.71-10.5 10.5-10.5s10.5 4.71 10.5 10.5a.75.75 0 01-.75.75z"></path>
                                    </svg>
                                 </span>
                                 <span class="text">Profile</span>
                              </div>
                           </h6>
                           <div class="profile-text rich-text-area">
                              <div>
                                 <div class="description "><span>I'm </span><span>a </span><span>full </span><span>stack </span><span>developer, </span><span>technology </span><span>lover </span><span>❤️🤓. </span><span>Constant </span><span>learner, </span><span>fascinated </span><span>in </span><span>contributing </span><span>to </span><span>the </span><span>development </span><span>of </span><span>systems, </span><span>providing </span><span>business </span><span>improvements, </span><span>acquiring </span><span>and </span><span>sharing </span><span>knowledge.</span></div>
                              </div>
                           </div>
                           <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        </div>
                     </div>
                     <div class="column-wrapper rich-text-section kickresume-section-wrapper " id="2b59ea48-0dbb-432d-9123-3794ebd4271a">
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                    <path d="M14.912 15.222c-.237 0-.47-.062-.673-.181L12 13.779l-2.247 1.264a1.316 1.316 0 01-.661.177c-.477 0-.922-.256-1.161-.667a1.348 1.348 0 01-.077-1.19l.88-2.022L7.149 9.78a1.32 1.32 0 01-.401-.931 1.323 1.323 0 01.375-.949c.249-.257.597-.405.955-.405h1.683l1.04-2.044a1.338 1.338 0 011.805-.591c.254.128.464.339.593.592l1.04 2.047h1.668a1.328 1.328 0 011.344 1.299c.009.371-.139.732-.406.99l-1.581 1.556.876 2.012c.142.338.144.704.008 1.034a1.333 1.333 0 01-1.236.832zM12 12.168c.129 0 .256.033.368.097l2.203 1.242-.887-2.037a.754.754 0 01.162-.834l1.664-1.637h-1.731a.745.745 0 01-.668-.41L12 6.404l-1.11 2.182a.747.747 0 01-.668.41H8.49l1.664 1.637c.22.216.285.551.162.834l-.887 2.038 2.204-1.24a.74.74 0 01.367-.097z"></path>
                                 </svg>
                              </span>
                              <span class="text">Value offered</span>
                           </div>
                        </h6>
                        <div class="text-area rich-text-area">
                           <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        </div>
                     </div>
                     <div class="column-wrapper rich-text-section kickresume-section-wrapper " id="2b59ea48-0dbb-432d-9123-3794ebd4271a">
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                    <path d="M14.912 15.222c-.237 0-.47-.062-.673-.181L12 13.779l-2.247 1.264a1.316 1.316 0 01-.661.177c-.477 0-.922-.256-1.161-.667a1.348 1.348 0 01-.077-1.19l.88-2.022L7.149 9.78a1.32 1.32 0 01-.401-.931 1.323 1.323 0 01.375-.949c.249-.257.597-.405.955-.405h1.683l1.04-2.044a1.338 1.338 0 011.805-.591c.254.128.464.339.593.592l1.04 2.047h1.668a1.328 1.328 0 011.344 1.299c.009.371-.139.732-.406.99l-1.581 1.556.876 2.012c.142.338.144.704.008 1.034a1.333 1.333 0 01-1.236.832zM12 12.168c.129 0 .256.033.368.097l2.203 1.242-.887-2.037a.754.754 0 01.162-.834l1.664-1.637h-1.731a.745.745 0 01-.668-.41L12 6.404l-1.11 2.182a.747.747 0 01-.668.41H8.49l1.664 1.637c.22.216.285.551.162.834l-.887 2.038 2.204-1.24a.74.74 0 01.367-.097z"></path>
                                 </svg>
                              </span>
                              <span class="text">Value offered</span>
                           </div>
                        </h6>
                        <div class="text-area rich-text-area">
                           <div refb="8706e803-56cb-11ed-a931-9516aa4c636a"></div>
                           <div refb="8706e803-56cb-11ed-a931-9516aa4c636a">
                              <ul refb="87070f10-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f10-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f11-56cb-11ed-a931-9516aa4c636a"><span>Resumed </span><span>value: </span></li>
                                 <li class="description " refb="87070f11-56cb-11ed-a931-9516aa4c636a"><span>Resumed </span><span>value: </span></li>
                              </ul>
                              <div class="description " refb="87070f12-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>4 </span><span>years </span><span>of </span><span>experience </span><span>in </span><span>system </span><span>development </span><span>(websites, </span><span>API's, </span></div>
                              <div class="description " refb="87070f12-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>4 </span><span>years </span><span>of </span><span>experience </span><span>in </span><span>system </span><span>development </span><span>(websites, </span><span>API's, </span></div>
                              <div class="description " refb="87070f13-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>workers, </span><span>mobile </span><span>applications </span><span>and </span><span>automated </span><span>tests)</span></div>
                              <div class="description " refb="87070f13-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>workers, </span><span>mobile </span><span>applications </span><span>and </span><span>automated </span><span>tests)</span></div>
                              <ul refb="87070f14-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f14-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f15-56cb-11ed-a931-9516aa4c636a"><span>Front-end: </span></li>
                                 <li class="description " refb="87070f15-56cb-11ed-a931-9516aa4c636a"><span>Front-end: </span></li>
                              </ul>
                              <div class="description " refb="87070f16-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Angular, </span><span>VueJs, </span><span>Angular </span><span>Material, </span><span>Bootstrap, </span><span>BootstrapVue, </span><span>Vuetify</span></div>
                              <div class="description " refb="87070f16-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Angular, </span><span>VueJs, </span><span>Angular </span><span>Material, </span><span>Bootstrap, </span><span>BootstrapVue, </span><span>Vuetify</span></div>
                              <ul refb="87070f17-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f17-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f18-56cb-11ed-a931-9516aa4c636a"><span>Back-end: </span></li>
                                 <li class="description " refb="87070f18-56cb-11ed-a931-9516aa4c636a"><span>Back-end: </span></li>
                              </ul>
                              <div class="description " refb="87070f19-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>.Net, </span><span>.Net </span><span>Core, </span><span>RabbitMQ, </span><span>Entity </span><span>Framework, </span><span>Identity, </span><span>MediatR</span></div>
                              <div class="description " refb="87070f19-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>.Net, </span><span>.Net </span><span>Core, </span><span>RabbitMQ, </span><span>Entity </span><span>Framework, </span><span>Identity, </span><span>MediatR</span></div>
                              <div class="description " refb="87070f1a-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>SpecFlow, </span><span>XUnit</span></div>
                              <div class="description " refb="87070f1a-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>SpecFlow, </span><span>XUnit</span></div>
                              <div class="description " refb="87070f1b-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Node, </span><span>Express</span></div>
                              <div class="description " refb="87070f1b-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Node, </span><span>Express</span></div>
                              <ul refb="87070f1c-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f1c-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f1d-56cb-11ed-a931-9516aa4c636a"><span>Mobile:	</span></li>
                                 <li class="description " refb="87070f1d-56cb-11ed-a931-9516aa4c636a"><span>Mobile:	</span></li>
                              </ul>
                              <div class="description " refb="87070f1e-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Flutter</span></div>
                              <div class="description " refb="87070f1e-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Flutter</span></div>
                              <ul refb="87070f1f-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f1f-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f20-56cb-11ed-a931-9516aa4c636a"><span>Programming </span><span>languages: </span></li>
                                 <li class="description " refb="87070f20-56cb-11ed-a931-9516aa4c636a"><span>Programming </span><span>languages: </span></li>
                              </ul>
                              <div class="description " refb="87070f21-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>C#, </span><span>Typescript, </span><span>Dart, </span><span>Javascript, </span><span>C++</span></div>
                              <div class="description " refb="87070f21-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>C#, </span><span>Typescript, </span><span>Dart, </span><span>Javascript, </span><span>C++</span></div>
                              <ul refb="87070f22-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f22-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f23-56cb-11ed-a931-9516aa4c636a"><span>Database: </span></li>
                                 <li class="description " refb="87070f23-56cb-11ed-a931-9516aa4c636a"><span>Database: </span></li>
                              </ul>
                              <div class="description " refb="87070f24-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>SqlServer, </span><span>MongoDb, </span><span>Mysql, </span><span>Firebird, </span><span>PostgresSQL, </span><span>Couchbase(cache)</span></div>
                              <div class="description " refb="87070f24-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>SqlServer, </span><span>MongoDb, </span><span>Mysql, </span><span>Firebird, </span><span>PostgresSQL, </span><span>Couchbase(cache)</span></div>
                              <ul refb="87070f25-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f25-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f26-56cb-11ed-a931-9516aa4c636a"><span>Agile </span><span>methodologies: </span></li>
                                 <li class="description " refb="87070f26-56cb-11ed-a931-9516aa4c636a"><span>Agile </span><span>methodologies: </span></li>
                              </ul>
                              <div class="description " refb="87070f27-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Scrum </span><span>and </span><span>Kanban</span></div>
                              <div class="description " refb="87070f27-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Scrum </span><span>and </span><span>Kanban</span></div>
                              <ul refb="87070f28-56cb-11ed-a931-9516aa4c636a"></ul>
                              <ul refb="87070f28-56cb-11ed-a931-9516aa4c636a">
                                 <li class="description " refb="87070f29-56cb-11ed-a931-9516aa4c636a"><span>Devops </span><span>and </span><span>others: </span></li>
                                 <li class="description " refb="87070f29-56cb-11ed-a931-9516aa4c636a"><span>Devops </span><span>and </span><span>others: </span></li>
                              </ul>
                              <div class="description " refb="87070f2a-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Azure </span><span>Devops, </span><span>Git, </span><span>Docker, </span><span>Firebase, </span><span>Heroku</span></div>
                              <div class="description " refb="87070f2a-56cb-11ed-a931-9516aa4c636a"><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>- </span><span>Azure </span><span>Devops, </span><span>Git, </span><span>Docker, </span><span>Firebase, </span><span>Heroku</span></div>
                           </div>
                           <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="44ea8e88-c2b3-4a48-909d-8930d2b2dedc">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M23.2 8.3L12.3 3.6c-.2-.1-.4-.1-.6 0L.8 8.3c-.1 0-.2.1-.2.2l-.1.1c0 .1-.1.1-.1.2v7.1c0 .4.4.8.8.8s.8-.4.8-.8v-5.6l2.8 1.1V17c0 .3.2.6.5.7l6.5 2.8c.1 0 .2.1.3.1s.2 0 .3-.1l6.5-2.8c.3-.1.5-.4.5-.7v-5.7l3.9-1.5c.3-.1.5-.4.5-.7s-.3-.7-.6-.8zm-5.5 8.1L12 18.9l-5.7-2.5v-4.5l5.4 2.1c.1 0 .2.1.3.1s.2 0 .3-.1l5.4-2.1v4.5zm-5.7-4L3.2 9 12 5.2 20.8 9 12 12.4z"></path>
                                 </svg>
                              </span>
                              <span class="text">Education</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="44ea8e88-c2b3-4a48-909d-8930d2b2dedc">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M23.2 8.3L12.3 3.6c-.2-.1-.4-.1-.6 0L.8 8.3c-.1 0-.2.1-.2.2l-.1.1c0 .1-.1.1-.1.2v7.1c0 .4.4.8.8.8s.8-.4.8-.8v-5.6l2.8 1.1V17c0 .3.2.6.5.7l6.5 2.8c.1 0 .2.1.3.1s.2 0 .3-.1l6.5-2.8c.3-.1.5-.4.5-.7v-5.7l3.9-1.5c.3-.1.5-.4.5-.7s-.3-.7-.6-.8zm-5.5 8.1L12 18.9l-5.7-2.5v-4.5l5.4 2.1c.1 0 .2.1.3.1s.2 0 .3-.1l5.4-2.1v4.5zm-5.7-4L3.2 9 12 5.2 20.8 9 12 12.4z"></path>
                                 </svg>
                              </span>
                              <span class="text">Education</span>
                           </div>
                        </h6>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>01/2019 – 03/2022</span><span><span>Igarapé</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>01/2019 – 03/2022</span><span><span>Igarapé</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position">Analysis and systems development | Bachelor's degree</div>
                                 <div class="company-name">Universidade Pitágoras Unopar Anhanguera</div>
                              </div>
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position">Analysis and systems development | Bachelor's degree</div>
                                 <div class="company-name">Universidade Pitágoras Unopar Anhanguera</div>
                              </div>
                              <div class="experience-description"></div>
                              <div class="experience-description">
                                 <div refb="87070f31-56cb-11ed-a931-9516aa4c636a"></div>
                                 <div refb="87070f31-56cb-11ed-a931-9516aa4c636a">
                                    <ul refb="87070f32-56cb-11ed-a931-9516aa4c636a"></ul>
                                    <ul refb="87070f32-56cb-11ed-a931-9516aa4c636a">
                                       <li class="description " refb="87070f33-56cb-11ed-a931-9516aa4c636a"><span>FUNDAMENTALS </span><span>that </span><span>deals </span><span>with </span><span>all </span><span>the </span><span>Mathematics </span><span>involved, </span><span>working </span><span>the </span><span>Logic </span><span>and </span><span>Algorithms </span><span>part, </span><span>and </span><span>connecting </span><span>these </span><span>concepts </span><span>in </span><span>a </span><span>solid </span><span>database, </span><span>Data </span><span>Persistence </span><span>and </span><span>Network </span><span>Infrastructure</span></li>
                                       <li class="description " refb="87070f33-56cb-11ed-a931-9516aa4c636a"><span>FUNDAMENTALS </span><span>that </span><span>deals </span><span>with </span><span>all </span><span>the </span><span>Mathematics </span><span>involved, </span><span>working </span><span>the </span><span>Logic </span><span>and </span><span>Algorithms </span><span>part, </span><span>and </span><span>connecting </span><span>these </span><span>concepts </span><span>in </span><span>a </span><span>solid </span><span>database, </span><span>Data </span><span>Persistence </span><span>and </span><span>Network </span><span>Infrastructure</span></li>
                                       <li class="description " refb="87070f34-56cb-11ed-a931-9516aa4c636a"><span>TECHNICIAN </span><span>with </span><span>languages </span><span>(Structured, </span><span>Script, </span><span>Object </span><span>Oriented, </span><span>Functional) </span><span>exploring </span><span>a </span><span>problem </span><span>decomposition </span><span>(Analysis </span><span>with </span><span>Lean </span><span>techniques), </span><span>its </span><span>modeling </span><span>and </span><span>optimization. </span><span>Concepts </span><span>such </span><span>as </span><span>TDD </span><span>(Test </span><span>Driven </span><span>Development), </span><span>SCRUM, </span><span>UX, </span><span>Kanban, </span><span>Design </span><span>Thinking, </span><span>CI/CD </span><span>(Continuous </span><span>Integration </span><span>and </span><span>Continuous </span><span>Delivery)</span></li>
                                       <li class="description " refb="87070f34-56cb-11ed-a931-9516aa4c636a"><span>TECHNICIAN </span><span>with </span><span>languages </span><span>(Structured, </span><span>Script, </span><span>Object </span><span>Oriented, </span><span>Functional) </span><span>exploring </span><span>a </span><span>problem </span><span>decomposition </span><span>(Analysis </span><span>with </span><span>Lean </span><span>techniques), </span><span>its </span><span>modeling </span><span>and </span><span>optimization. </span><span>Concepts </span><span>such </span><span>as </span><span>TDD </span><span>(Test </span><span>Driven </span><span>Development), </span><span>SCRUM, </span><span>UX, </span><span>Kanban, </span><span>Design </span><span>Thinking, </span><span>CI/CD </span><span>(Continuous </span><span>Integration </span><span>and </span><span>Continuous </span><span>Delivery)</span></li>
                                       <li class="description " refb="87070f35-56cb-11ed-a931-9516aa4c636a"><span>TOOLS </span><span>programming </span><span>and </span><span>their </span><span>languages, </span><span>modeling, </span><span>functional </span><span>and </span><span>non-functional </span><span>quality, </span><span>testing, </span><span>orchestration, </span><span>monitoring </span><span>are </span><span>broadly </span><span>addressed</span></li>
                                       <li class="description " refb="87070f35-56cb-11ed-a931-9516aa4c636a"><span>TOOLS </span><span>programming </span><span>and </span><span>their </span><span>languages, </span><span>modeling, </span><span>functional </span><span>and </span><span>non-functional </span><span>quality, </span><span>testing, </span><span>orchestration, </span><span>monitoring </span><span>are </span><span>broadly </span><span>addressed</span></li>
                                       <li class="description " refb="87070f36-56cb-11ed-a931-9516aa4c636a"><span>CULTURE </span><span>is </span><span>approached </span><span>as </span><span>a </span><span>cross-discipline </span><span>development, </span><span>focusing </span><span>on </span><span>Agile, </span><span>DevSecOps </span><span>and </span><span>Collaborative </span><span>practices</span></li>
                                       <li class="description " refb="87070f36-56cb-11ed-a931-9516aa4c636a"><span>CULTURE </span><span>is </span><span>approached </span><span>as </span><span>a </span><span>cross-discipline </span><span>development, </span><span>focusing </span><span>on </span><span>Agile, </span><span>DevSecOps </span><span>and </span><span>Collaborative </span><span>practices</span></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="42a795f1-f34c-4595-8481-c618070cece5">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M2.25 22.501A2.252 2.252 0 010 20.251v-12a2.252 2.252 0 012.25-2.25h4.558c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5h4.558A2.252 2.252 0 0124 8.251v12a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6.75h-8.25c0 1.24-1.01 2.249-2.25 2.249a2.253 2.253 0 01-2.25-2.249H1.5v6.75zM12 11.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm10.5.751v-3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h8.25V12A2.252 2.252 0 0112 9.75 2.252 2.252 0 0114.25 12v.001h8.25zm-6.828-6c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"></path>
                                 </svg>
                              </span>
                              <span class="text">Work experience</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper experience-section type-three  column-wrapper " id="42a795f1-f34c-4595-8481-c618070cece5">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M2.25 22.501A2.252 2.252 0 010 20.251v-12a2.252 2.252 0 012.25-2.25h4.558c.368-2.55 2.584-4.5 5.192-4.5s4.824 1.95 5.192 4.5h4.558A2.252 2.252 0 0124 8.251v12a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6.75h-8.25c0 1.24-1.01 2.249-2.25 2.249a2.253 2.253 0 01-2.25-2.249H1.5v6.75zM12 11.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0V12a.75.75 0 00-.75-.75zm10.5.751v-3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h8.25V12A2.252 2.252 0 0112 9.75 2.252 2.252 0 0114.25 12v.001h8.25zm-6.828-6c-.352-1.712-1.892-3-3.672-3s-3.32 1.288-3.672 3h7.344z"></path>
                                 </svg>
                              </span>
                              <span class="text">Work experience</span>
                           </div>
                        </h6>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>07/2021 – present</span><span><span>Belo Horizonte</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>07/2021 – present</span><span><span>Belo Horizonte</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position"> .Net | Angular Developer</div>
                                 <div class="company-name">BANK BS2&nbsp;HUB TECNOLOGIA DIGITAL LTDA</div>
                              </div>
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position"> .Net | Angular Developer</div>
                                 <div class="company-name">BANK BS2&nbsp;HUB TECNOLOGIA DIGITAL LTDA</div>
                              </div>
                              <div class="experience-description"></div>
                              <div class="experience-description">
                                 <div refb="87070f3c-56cb-11ed-a931-9516aa4c636a"></div>
                                 <div refb="87070f3c-56cb-11ed-a931-9516aa4c636a">
                                    <div class="description " refb="87070f3d-56cb-11ed-a931-9516aa4c636a"><span>-Development </span><span>of </span><span>new </span><span>features </span><span>and </span><span>maintenance </span><span>of </span><span>company </span><span>systems </span><span>based </span><span>on </span><span>the </span><span>.Net </span><span>Core </span><span>and </span><span>Angular</span></div>
                                    <div class="description " refb="87070f3d-56cb-11ed-a931-9516aa4c636a"><span>-Development </span><span>of </span><span>new </span><span>features </span><span>and </span><span>maintenance </span><span>of </span><span>company </span><span>systems </span><span>based </span><span>on </span><span>the </span><span>.Net </span><span>Core </span><span>and </span><span>Angular</span></div>
                                    <ul refb="87070f3e-56cb-11ed-a931-9516aa4c636a"></ul>
                                    <ul refb="87070f3e-56cb-11ed-a931-9516aa4c636a">
                                       <li class="description " refb="87070f3f-56cb-11ed-a931-9516aa4c636a"><span>.NET </span><span>Core </span><span>· </span><span>Angular </span><span>(Framework) </span><span>· </span><span>RabbitMQ </span><span>· </span><span>Azure </span><span>DevOps </span><span>· </span><span>Microsoft </span><span>SQL </span><span>Server</span></li>
                                       <li class="description " refb="87070f3f-56cb-11ed-a931-9516aa4c636a"><span>.NET </span><span>Core </span><span>· </span><span>Angular </span><span>(Framework) </span><span>· </span><span>RabbitMQ </span><span>· </span><span>Azure </span><span>DevOps </span><span>· </span><span>Microsoft </span><span>SQL </span><span>Server</span></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>10/2020 – 07/2021</span><span><span>Belo Horizonte</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>10/2020 – 07/2021</span><span><span>Belo Horizonte</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position"> .Net | Angular Developer</div>
                                 <div class="company-name">SIX TECH TECNOLOGIA E PARTICIPAÇÕES S/A</div>
                              </div>
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position"> .Net | Angular Developer</div>
                                 <div class="company-name">SIX TECH TECNOLOGIA E PARTICIPAÇÕES S/A</div>
                              </div>
                              <div class="experience-description"></div>
                              <div class="experience-description">
                                 <div refb="87070f44-56cb-11ed-a931-9516aa4c636a"></div>
                                 <div refb="87070f44-56cb-11ed-a931-9516aa4c636a">
                                    <div class="description " refb="87070f45-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Development </span><span>of </span><span>new </span><span>features </span><span>and </span><span>maintenance </span><span>of </span><span>company </span><span>systems </span><span>based </span><span>on </span><span>the </span><span>.Net </span><span>Core </span><span>and </span><span>Angular</span></div>
                                    <div class="description " refb="87070f45-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Development </span><span>of </span><span>new </span><span>features </span><span>and </span><span>maintenance </span><span>of </span><span>company </span><span>systems </span><span>based </span><span>on </span><span>the </span><span>.Net </span><span>Core </span><span>and </span><span>Angular</span></div>
                                    <div class="description " refb="87070f46-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Maintenance </span><span>of </span><span>software </span><span>legacy </span><span>made </span><span>with </span><span>.NET </span><span>MVC</span></div>
                                    <div class="description " refb="87070f46-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Maintenance </span><span>of </span><span>software </span><span>legacy </span><span>made </span><span>with </span><span>.NET </span><span>MVC</span></div>
                                    <ul refb="87070f47-56cb-11ed-a931-9516aa4c636a"></ul>
                                    <ul refb="87070f47-56cb-11ed-a931-9516aa4c636a">
                                       <li class="description " refb="87070f48-56cb-11ed-a931-9516aa4c636a"><span>MongoDB </span><span>· </span><span>.NET </span><span>Core </span><span>· </span><span>Angular </span><span>(Framework) </span><span>· </span><span>Azure </span><span>DevOps</span></li>
                                       <li class="description " refb="87070f48-56cb-11ed-a931-9516aa4c636a"><span>MongoDB </span><span>· </span><span>.NET </span><span>Core </span><span>· </span><span>Angular </span><span>(Framework) </span><span>· </span><span>Azure </span><span>DevOps</span></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>04/2019 – 10/2020</span><span><span>Betim</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>04/2019 – 10/2020</span><span><span>Betim</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position"> .Net | Vue.js Developer - Junior</div>
                                 <div class="company-name">DONUZ SERVICOS DE INFORMATICA LTDA</div>
                              </div>
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position"> .Net | Vue.js Developer - Junior</div>
                                 <div class="company-name">DONUZ SERVICOS DE INFORMATICA LTDA</div>
                              </div>
                              <div class="experience-description"></div>
                              <div class="experience-description">
                                 <div refb="87070f4d-56cb-11ed-a931-9516aa4c636a"></div>
                                 <div refb="87070f4d-56cb-11ed-a931-9516aa4c636a">
                                    <div class="description " refb="87070f4e-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Development </span><span>and </span><span>maintenance </span><span>of </span><span>software </span><span>to </span><span>perform </span><span>integrations </span><span>between </span><span>the </span><span>Donuz </span><span>system </span><span>and </span><span>third-party </span><span>systems </span><span>using </span><span>.Net. </span><span>The </span><span>integrations </span><span>were </span><span>made </span><span>through </span><span>Rest </span><span>APIs, </span><span>reading </span><span>of </span><span>database </span><span>and </span><span>worksheets.</span></div>
                                    <div class="description " refb="87070f4e-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Development </span><span>and </span><span>maintenance </span><span>of </span><span>software </span><span>to </span><span>perform </span><span>integrations </span><span>between </span><span>the </span><span>Donuz </span><span>system </span><span>and </span><span>third-party </span><span>systems </span><span>using </span><span>.Net. </span><span>The </span><span>integrations </span><span>were </span><span>made </span><span>through </span><span>Rest </span><span>APIs, </span><span>reading </span><span>of </span><span>database </span><span>and </span><span>worksheets.</span></div>
                                    <div class="description " refb="87070f4f-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Development </span><span>and </span><span>maintenance </span><span>of </span><span>applications </span><span>for </span><span>web, </span><span>using </span><span>Vue.js</span></div>
                                    <div class="description " refb="87070f4f-56cb-11ed-a931-9516aa4c636a"><span>- </span><span>Development </span><span>and </span><span>maintenance </span><span>of </span><span>applications </span><span>for </span><span>web, </span><span>using </span><span>Vue.js</span></div>
                                    <ul refb="87070f50-56cb-11ed-a931-9516aa4c636a"></ul>
                                    <ul refb="87070f50-56cb-11ed-a931-9516aa4c636a">
                                       <li class="description " refb="87070f51-56cb-11ed-a931-9516aa4c636a"><span>.NET </span><span>Framework </span><span>· </span><span>Vuejs </span><span>· </span><span>Microsoft </span><span>SQL </span><span>Server </span><span>· </span><span>MySQL </span><span>· </span><span>PostgreSQL</span></li>
                                       <li class="description " refb="87070f51-56cb-11ed-a931-9516aa4c636a"><span>.NET </span><span>Framework </span><span>· </span><span>Vuejs </span><span>· </span><span>Microsoft </span><span>SQL </span><span>Server </span><span>· </span><span>MySQL </span><span>· </span><span>PostgreSQL</span></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>01/2011 – 05/2018</span><span><span>Igarapé</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                              <div class="left-column-wrapper">
                                 <div class="date   "><span>01/2011 – 05/2018</span><span><span>Igarapé</span><span>,&nbsp;</span><span>Brazil</span></span></div>
                              </div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position">Administrative Assistant</div>
                                 <div class="company-name">SUPERMERCADO MAIA PIMENTA LTDA</div>
                              </div>
                              <div class="experience-info">
                                 <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                                 <div class="position">Administrative Assistant</div>
                                 <div class="company-name">SUPERMERCADO MAIA PIMENTA LTDA</div>
                              </div>
                              <div class="experience-description"></div>
                              <div class="experience-description">
                                 <div refb="87070f56-56cb-11ed-a931-9516aa4c636a"></div>
                                 <div refb="87070f56-56cb-11ed-a931-9516aa4c636a">
                                    <ul refb="87070f57-56cb-11ed-a931-9516aa4c636a"></ul>
                                    <ul refb="87070f57-56cb-11ed-a931-9516aa4c636a">
                                       <li class="description " refb="87070f58-56cb-11ed-a931-9516aa4c636a"><span> </span><span>Maintenance </span><span>of </span><span>company </span><span>computers</span></li>
                                       <li class="description " refb="87070f58-56cb-11ed-a931-9516aa4c636a"><span> </span><span>Maintenance </span><span>of </span><span>company </span><span>computers</span></li>
                                       <li class="description " refb="87070f59-56cb-11ed-a931-9516aa4c636a"><span>Network </span><span>Settings</span></li>
                                       <li class="description " refb="87070f59-56cb-11ed-a931-9516aa4c636a"><span>Network </span><span>Settings</span></li>
                                       <li class="description " refb="87070f5a-56cb-11ed-a931-9516aa4c636a"><span>Creation </span><span>of </span><span>spreadsheets </span><span>in </span><span>Excel, </span><span>arts </span><span>with </span><span>Publisher, </span><span>text </span><span>editing </span><span>with </span><span>Word</span></li>
                                       <li class="description " refb="87070f5a-56cb-11ed-a931-9516aa4c636a"><span>Creation </span><span>of </span><span>spreadsheets </span><span>in </span><span>Excel, </span><span>arts </span><span>with </span><span>Publisher, </span><span>text </span><span>editing </span><span>with </span><span>Word</span></li>
                                       <li class="description " refb="87070f5b-56cb-11ed-a931-9516aa4c636a"><span>Tax </span><span>calculation, </span><span>release </span><span>and </span><span>issuance </span><span>of </span><span>invoices.</span></li>
                                       <li class="description " refb="87070f5b-56cb-11ed-a931-9516aa4c636a"><span>Tax </span><span>calculation, </span><span>release </span><span>and </span><span>issuance </span><span>of </span><span>invoices.</span></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper skill-section type-one  column-wrapper " id="43cab7df-fb29-4314-93ca-3ba29c0bede9">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M4.002 24a3.736 3.736 0 01-2.039-.606 3.755 3.755 0 01-1.101-5.188L7.478 8.028V1.5h-.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-.75v6.528l6.616 10.179c.396.61.606 1.316.606 2.043a3.73 3.73 0 01-1.098 2.652A3.728 3.728 0 0119.95 24H4.002zM2.12 19.024a2.253 2.253 0 001.883 3.477H19.95c.601 0 1.166-.234 1.591-.659a2.244 2.244 0 00.295-2.817l-3.59-5.524H5.71l-3.59 5.523zM17.271 12l-2.172-3.341a.75.75 0 01-.121-.409V7.5h-2.25a.75.75 0 010-1.5h2.25V4.5h-2.25a.75.75 0 010-1.5h2.25V1.5h-6v6.75a.75.75 0 01-.121.409L6.685 12h10.586z"></path>
                                    <path d="M15.728 19.5a.75.75 0 01-.75-.75V18h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zm-9.001 1.125a.748.748 0 01-.133-.012 1.126 1.126 0 01-.98-.982.717.717 0 01-.001-.262c.06-.513.47-.922.983-.983a.796.796 0 01.258 0c.514.059.924.469.985.983a.717.717 0 010 .262c-.06.512-.468.921-.98.982a.704.704 0 01-.132.012zm3-3a.748.748 0 01-.133-.012 1.126 1.126 0 01-.98-.982.717.717 0 01-.001-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.568.066.995.542.995 1.114a.817.817 0 01-.013.139 1.128 1.128 0 01-.979.974.704.704 0 01-.132.012z"></path>
                                 </svg>
                              </span>
                              <span class="text">Skills</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper skill-section type-one  column-wrapper " id="43cab7df-fb29-4314-93ca-3ba29c0bede9">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M4.002 24a3.736 3.736 0 01-2.039-.606 3.755 3.755 0 01-1.101-5.188L7.478 8.028V1.5h-.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-.75v6.528l6.616 10.179c.396.61.606 1.316.606 2.043a3.73 3.73 0 01-1.098 2.652A3.728 3.728 0 0119.95 24H4.002zM2.12 19.024a2.253 2.253 0 001.883 3.477H19.95c.601 0 1.166-.234 1.591-.659a2.244 2.244 0 00.295-2.817l-3.59-5.524H5.71l-3.59 5.523zM17.271 12l-2.172-3.341a.75.75 0 01-.121-.409V7.5h-2.25a.75.75 0 010-1.5h2.25V4.5h-2.25a.75.75 0 010-1.5h2.25V1.5h-6v6.75a.75.75 0 01-.121.409L6.685 12h10.586z"></path>
                                    <path d="M15.728 19.5a.75.75 0 01-.75-.75V18h-.75a.75.75 0 010-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75zm-9.001 1.125a.748.748 0 01-.133-.012 1.126 1.126 0 01-.98-.982.717.717 0 01-.001-.262c.06-.513.47-.922.983-.983a.796.796 0 01.258 0c.514.059.924.469.985.983a.717.717 0 010 .262c-.06.512-.468.921-.98.982a.704.704 0 01-.132.012zm3-3a.748.748 0 01-.133-.012 1.126 1.126 0 01-.98-.982.717.717 0 01-.001-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.568.066.995.542.995 1.114a.817.817 0 01-.013.139 1.128 1.128 0 01-.979.974.704.704 0 01-.132.012z"></path>
                                 </svg>
                              </span>
                              <span class="text">Skills</span>
                           </div>
                        </h6>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Front-end</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Angular</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">VueJs</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Front-end</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Angular</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">VueJs</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Back-end</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">.Net</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">.Net Core</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Node</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Back-end</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">.Net</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">.Net Core</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Node</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Mobile</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Flutter</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Mobile</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Flutter</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Devops and others</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Azure Devops</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Firebase</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Heroku </div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Docker</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Git</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Devops and others</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Azure Devops</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Firebase</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Heroku </div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Docker</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Git</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Agile Methodologies</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Scrum </div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Kanban</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name ">Agile Methodologies</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Scrum </div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">Kanban</div>
                                    <div class="skill-description-wrapper ">
                                       <div class="skill-description">
                                          <div><i class="active"></i><i class="active"></i><i class="active"></i><i class="active"></i><i class=""></i></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="05ae758a-5f25-4279-bf55-b0e9efb08486">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                    <path d="M10.5 14.25c-.4 0-.776-.156-1.059-.438l-1.721-1.72a.752.752 0 01.531-1.281c.2 0 .388.078.53.219l1.72 1.719L15.97 7.28a.744.744 0 011.06 0 .744.744 0 010 1.06l-5.47 5.469a1.486 1.486 0 01-1.059.439l-.001.002z"></path>
                                 </svg>
                              </span>
                              <span class="text">Certifications</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="05ae758a-5f25-4279-bf55-b0e9efb08486">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"></path>
                                    <path d="M10.5 14.25c-.4 0-.776-.156-1.059-.438l-1.721-1.72a.752.752 0 01.531-1.281c.2 0 .388.078.53.219l1.72 1.719L15.97 7.28a.744.744 0 011.06 0 .744.744 0 010 1.06l-5.47 5.469a1.486 1.486 0 01-1.059.439l-.001.002z"></path>
                                 </svg>
                              </span>
                              <span class="text">Certifications</span>
                           </div>
                        </h6>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">11/2020</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">11/2020</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Rich Domain Modeling</div>
                                 <div class="publisher">desenvolvedor.io</div>
                                 <div class="url"><a href="https://desenvolvedor.io/certificado/0268b20e-e227-439c-af08-f6f359febb0a" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/0268b20e-e227-439c-af08-f6f359febb0a</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Rich Domain Modeling</div>
                                 <div class="publisher">desenvolvedor.io</div>
                                 <div class="url"><a href="https://desenvolvedor.io/certificado/0268b20e-e227-439c-af08-f6f359febb0a" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/0268b20e-e227-439c-af08-f6f359febb0a</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">10/2020</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">10/2020</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Getting Started with ASP.NET Core</div>
                                 <div class="publisher">desenvolvedor.io</div>
                                 <div class="url"><a href="https://desenvolvedor.io/certificado/017a5208-6b3c-4d7f-a707-66a5021745ec" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/017a5208-6b3c-4d7f-a707-66a5021745ec</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Getting Started with ASP.NET Core</div>
                                 <div class="publisher">desenvolvedor.io</div>
                                 <div class="url"><a href="https://desenvolvedor.io/certificado/017a5208-6b3c-4d7f-a707-66a5021745ec" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/017a5208-6b3c-4d7f-a707-66a5021745ec</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">10/2020</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">10/2020</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Introduction to Entity Framework Core</div>
                                 <div class="publisher">desenvolvedor.io</div>
                                 <div class="url"><a href="https://desenvolvedor.io/certificado/eefe5cd1-5ddf-4564-8ea2-f78a1d840557" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/eefe5cd1-5ddf-4564-8ea2-f78a1d840557</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Introduction to Entity Framework Core</div>
                                 <div class="publisher">desenvolvedor.io</div>
                                 <div class="url"><a href="https://desenvolvedor.io/certificado/eefe5cd1-5ddf-4564-8ea2-f78a1d840557" target="_blank" rel="noopener noreferrer nofollow ugc">https://desenvolvedor.io/certificado/eefe5cd1-5ddf-4564-8ea2-f78a1d840557</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">03/2020</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">03/2020</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Building Android and iOS Apps with Flutter</div>
                                 <div class="publisher">Udemy</div>
                                 <div class="url"><a href="https://github.com/CabralPro/MEUS_CERTIFICADOS/blob/main/Cria%C3%A7%C3%A3o%20de%20apps%20com%20Flutter.jpg?raw=true" target="_blank" rel="noopener noreferrer nofollow ugc">https://github.com/CabralPro/MEUS_CERTIFICADOS/blob/main/Cria%C3%A7%C3%A3o%20de%20apps%20com%20Flutter.jpg?raw=true</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Building Android and iOS Apps with Flutter</div>
                                 <div class="publisher">Udemy</div>
                                 <div class="url"><a href="https://github.com/CabralPro/MEUS_CERTIFICADOS/blob/main/Cria%C3%A7%C3%A3o%20de%20apps%20com%20Flutter.jpg?raw=true" target="_blank" rel="noopener noreferrer nofollow ugc">https://github.com/CabralPro/MEUS_CERTIFICADOS/blob/main/Cria%C3%A7%C3%A3o%20de%20apps%20com%20Flutter.jpg?raw=true</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">03/2020</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">03/2020</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Modern Web Course with JavaScript 2020 FULL</div>
                                 <div class="publisher">Udemy</div>
                                 <div class="url"><a href="https://raw.githubusercontent.com/CabralPro/MEUS_CERTIFICADOS/main/Web%20Moderno.jpg" target="_blank" rel="noopener noreferrer nofollow ugc">https://raw.githubusercontent.com/CabralPro/MEUS_CERTIFICADOS/main/Web%20Moderno.jpg</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Modern Web Course with JavaScript 2020 FULL</div>
                                 <div class="publisher">Udemy</div>
                                 <div class="url"><a href="https://raw.githubusercontent.com/CabralPro/MEUS_CERTIFICADOS/main/Web%20Moderno.jpg" target="_blank" rel="noopener noreferrer nofollow ugc">https://raw.githubusercontent.com/CabralPro/MEUS_CERTIFICADOS/main/Web%20Moderno.jpg</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">01/2020</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">01/2020</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name"> Flexbox</div>
                                 <div class="publisher">Alura</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name"> Flexbox</div>
                                 <div class="publisher">Alura</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">10/2019</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">10/2019</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Web Performance</div>
                                 <div class="publisher">Alura</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Web Performance</div>
                                 <div class="publisher">Alura</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">03/2019</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">03/2019</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Java course</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Java course</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">02/2019</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">02/2019</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">HTML 5 e CSS3</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">HTML 5 e CSS3</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">01/2019</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">01/2019</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">MYSQL course</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">MYSQL course</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">08/2018</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">08/2018</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">POO Java</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">POO Java</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info">
                                 <div class="date">07/2018</div>
                              </div>
                              <div class="experience-info">
                                 <div class="date">07/2018</div>
                              </div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">Programming algorithm and logic</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">Programming algorithm and logic</div>
                                 <div class="publisher">Curso em Video</div>
                                 <div class="url"><a href="#" target="_blank" rel="noopener noreferrer nofollow ugc"></a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper skill-section type-one  column-wrapper " id="492e9995-1a34-4271-a7a0-b39567814962">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.071 24a.75.75 0 01-.708-.998A7.49 7.49 0 0116.405 18a7.496 7.496 0 017.052 5.001.75.75 0 11-1.415.498 5.963 5.963 0 00-4.885-3.947v3.698a.75.75 0 01-1.5 0v-3.697a5.963 5.963 0 00-4.878 3.946.753.753 0 01-.708.501zm6.336-6a4.88 4.88 0 01-4.875-4.875 4.867 4.867 0 01.684-2.479 4.898 4.898 0 014.191-2.396c2.384 0 4.449 1.774 4.812 4.13a.75.75 0 01.025.166c.025.212.038.401.038.579A4.88 4.88 0 0116.407 18zm-3.27-5.713a3.379 3.379 0 003.269 4.213 3.38 3.38 0 003.34-2.885 7.636 7.636 0 01-6.609-1.328zm.711-1.357a6.104 6.104 0 003.952 1.435c.621 0 1.231-.093 1.817-.277a3.395 3.395 0 00-3.21-2.338c-.986 0-1.92.436-2.559 1.18zm-4.191.32a.753.753 0 01-.45-.15L6.407 9h-4.25a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 012.157 0h9a2.252 2.252 0 012.25 2.25v4.5A2.252 2.252 0 0111.157 9h-.75v1.5a.747.747 0 01-.75.75zm-7.5-9.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5c.161 0 .321.053.45.15L8.907 9v-.75a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"></path>
                                    <path d="M3.657 3.75a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75zm0 2.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.5 19.5c-2.068 0-3.75-1.682-3.75-3.75S3.432 12 5.5 12s3.75 1.682 3.75 3.75S7.567 19.5 5.5 19.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.259 18 5.5 18s2.25-1.009 2.25-2.25S6.74 13.5 5.5 13.5zM1.276 24a.751.751 0 01-.676-.425.74.74 0 01-.031-.573A5.245 5.245 0 015.5 19.501c1.12 0 2.222.366 3.112 1.031a.74.74 0 01.293.494.742.742 0 01-.141.556.756.756 0 01-.601.301.744.744 0 01-.448-.149A3.71 3.71 0 005.507 21a3.744 3.744 0 00-3.524 2.499.75.75 0 01-.707.501z"></path>
                                 </svg>
                              </span>
                              <span class="text">Languages</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper skill-section type-one  column-wrapper " id="492e9995-1a34-4271-a7a0-b39567814962">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M10.071 24a.75.75 0 01-.708-.998A7.49 7.49 0 0116.405 18a7.496 7.496 0 017.052 5.001.75.75 0 11-1.415.498 5.963 5.963 0 00-4.885-3.947v3.698a.75.75 0 01-1.5 0v-3.697a5.963 5.963 0 00-4.878 3.946.753.753 0 01-.708.501zm6.336-6a4.88 4.88 0 01-4.875-4.875 4.867 4.867 0 01.684-2.479 4.898 4.898 0 014.191-2.396c2.384 0 4.449 1.774 4.812 4.13a.75.75 0 01.025.166c.025.212.038.401.038.579A4.88 4.88 0 0116.407 18zm-3.27-5.713a3.379 3.379 0 003.269 4.213 3.38 3.38 0 003.34-2.885 7.636 7.636 0 01-6.609-1.328zm.711-1.357a6.104 6.104 0 003.952 1.435c.621 0 1.231-.093 1.817-.277a3.395 3.395 0 00-3.21-2.338c-.986 0-1.92.436-2.559 1.18zm-4.191.32a.753.753 0 01-.45-.15L6.407 9h-4.25a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 012.157 0h9a2.252 2.252 0 012.25 2.25v4.5A2.252 2.252 0 0111.157 9h-.75v1.5a.747.747 0 01-.75.75zm-7.5-9.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5c.161 0 .321.053.45.15L8.907 9v-.75a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"></path>
                                    <path d="M3.657 3.75a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75zm0 2.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM5.5 19.5c-2.068 0-3.75-1.682-3.75-3.75S3.432 12 5.5 12s3.75 1.682 3.75 3.75S7.567 19.5 5.5 19.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S4.259 18 5.5 18s2.25-1.009 2.25-2.25S6.74 13.5 5.5 13.5zM1.276 24a.751.751 0 01-.676-.425.74.74 0 01-.031-.573A5.245 5.245 0 015.5 19.501c1.12 0 2.222.366 3.112 1.031a.74.74 0 01.293.494.742.742 0 01-.141.556.756.756 0 01-.601.301.744.744 0 01-.448-.149A3.71 3.71 0 005.507 21a3.744 3.744 0 00-3.524 2.499.75.75 0 01-.707.501z"></path>
                                 </svg>
                              </span>
                              <span class="text">Languages</span>
                           </div>
                        </h6>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name "><br></div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Portuguese</div>
                                    <div class="skill-description-wrapper text">
                                       <div class="skill-description">Native</div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">English</div>
                                    <div class="skill-description-wrapper text">
                                       <div class="skill-description">Advanced</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="skill-category column-wrapper">
                           <div class="skill-wrapper">
                              <div class="skill-category-name "><br></div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="skills">
                                 <div class="skill ">
                                    <div class="skill-name">Portuguese</div>
                                    <div class="skill-description-wrapper text">
                                       <div class="skill-description">Native</div>
                                    </div>
                                 </div>
                                 <div class="skill ">
                                    <div class="skill-name">English</div>
                                    <div class="skill-description-wrapper text">
                                       <div class="skill-description">Advanced</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="80c6eeca-ab27-41e1-b789-142796ba94d3">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.25 24c-1.654 0-3-1.346-3-3V5.25A3.754 3.754 0 016 1.5h5.379A2.258 2.258 0 0113.5 0h3c.96 0 1.808.615 2.121 1.5h1.629c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5v3H21a.75.75 0 010 1.5H5.25zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h13.5v-3H5.25zM6 3a2.252 2.252 0 00-2.25 2.25v13.151A2.973 2.973 0 015.25 18h15V3h-1.5v9.75a.75.75 0 01-1.28.53L15 10.811l-2.47 2.47a.746.746 0 01-.817.162.746.746 0 01-.462-.693V3H6zm9 6c.2 0 .389.078.53.22l1.72 1.72V2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v8.689l1.72-1.72A.746.746 0 0115 9z"></path>
                                 </svg>
                              </span>
                              <span class="text">Publications</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper experience-section publication-section  column-wrapper " id="80c6eeca-ab27-41e1-b789-142796ba94d3">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.25 24c-1.654 0-3-1.346-3-3V5.25A3.754 3.754 0 016 1.5h5.379A2.258 2.258 0 0113.5 0h3c.96 0 1.808.615 2.121 1.5h1.629c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5v3H21a.75.75 0 010 1.5H5.25zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h13.5v-3H5.25zM6 3a2.252 2.252 0 00-2.25 2.25v13.151A2.973 2.973 0 015.25 18h15V3h-1.5v9.75a.75.75 0 01-1.28.53L15 10.811l-2.47 2.47a.746.746 0 01-.817.162.746.746 0 01-.462-.693V3H6zm9 6c.2 0 .389.078.53.22l1.72 1.72V2.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v8.689l1.72-1.72A.746.746 0 0115 9z"></path>
                                 </svg>
                              </span>
                              <span class="text">Publications</span>
                           </div>
                        </h6>
                        <div class="experience-item"></div>
                        <div class="experience-item">
                           <div class="column left-column-render">
                              <div class="experience-info"></div>
                              <div class="experience-info"></div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                              <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                           </div>
                           <div class="column right-column-render">
                              <div class="experience-description">
                                 <div class="publication-name">My programming youtube channel</div>
                                 <div class="publisher"></div>
                                 <div class="url"><a href="https://www.youtube.com/channel/UCm1y-992LKdzMs9E8edj7eA/videos" target="_blank" rel="noopener noreferrer nofollow ugc">https://www.youtube.com/channel/UCm1y-992LKdzMs9E8edj7eA/videos</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                              <div class="experience-description">
                                 <div class="publication-name">My programming youtube channel</div>
                                 <div class="publisher"></div>
                                 <div class="url"><a href="https://www.youtube.com/channel/UCm1y-992LKdzMs9E8edj7eA/videos" target="_blank" rel="noopener noreferrer nofollow ugc">https://www.youtube.com/channel/UCm1y-992LKdzMs9E8edj7eA/videos</a></div>
                                 <div>
                                    <div class="description "></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="kickresume-section-wrapper social-section sec-al-left column-wrapper " id="94278bae-7d20-4686-b9e6-62b348254403">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M18.75 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 0121.75 24h-3zm4.5-18a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0124 2.25v3a.75.75 0 01-.75.75zM.75 6A.75.75 0 010 5.25v-3A2.252 2.252 0 012.25 0h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v3A.75.75 0 01.75 6zm1.5 18A2.252 2.252 0 010 21.75v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3zM12 13.875c-2.688 0-4.875-2.187-4.875-4.875S9.312 4.125 12 4.125 16.875 6.312 16.875 9 14.688 13.875 12 13.875zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375s1.514 3.375 3.375 3.375S15.375 10.861 15.375 9 13.861 5.625 12 5.625z"></path>
                                    <path d="M18.365 19.875a.752.752 0 01-.707-.5 5.961 5.961 0 00-3.072-3.415 5.95 5.95 0 00-4.587-.243 5.975 5.975 0 00-3.658 3.658.752.752 0 01-.957.457.75.75 0 01-.457-.957 7.467 7.467 0 014.572-4.572 7.443 7.443 0 015.733.303 7.448 7.448 0 013.839 4.269.745.745 0 01-.03.573.744.744 0 01-.676.427z"></path>
                                 </svg>
                              </span>
                              <span class="text">Social networks</span>
                           </div>
                        </h6>
                     </div>
                     <div class="kickresume-section-wrapper social-section sec-al-left column-wrapper " id="94278bae-7d20-4686-b9e6-62b348254403">
                        <div class="NoteDetails__note-detail___yB3Xx5OauH note-detail-item">&nbsp;</div>
                        <h6 class="headline type-four">
                           <div class="background-wrapper">
                              <span class="icon fixed">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M18.75 24a.75.75 0 010-1.5h3a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.252 2.252 0 0121.75 24h-3zm4.5-18a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0124 2.25v3a.75.75 0 01-.75.75zM.75 6A.75.75 0 010 5.25v-3A2.252 2.252 0 012.25 0h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v3A.75.75 0 01.75 6zm1.5 18A2.252 2.252 0 010 21.75v-3a.75.75 0 011.5 0v3c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3zM12 13.875c-2.688 0-4.875-2.187-4.875-4.875S9.312 4.125 12 4.125 16.875 6.312 16.875 9 14.688 13.875 12 13.875zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375s1.514 3.375 3.375 3.375S15.375 10.861 15.375 9 13.861 5.625 12 5.625z"></path>
                                    <path d="M18.365 19.875a.752.752 0 01-.707-.5 5.961 5.961 0 00-3.072-3.415 5.95 5.95 0 00-4.587-.243 5.975 5.975 0 00-3.658 3.658.752.752 0 01-.957.457.75.75 0 01-.457-.957 7.467 7.467 0 014.572-4.572 7.443 7.443 0 015.733.303 7.448 7.448 0 013.839 4.269.745.745 0 01-.03.573.744.744 0 01-.676.427z"></path>
                                 </svg>
                              </span>
                              <span class="text">Social networks</span>
                           </div>
                        </h6>
                        <div class="social-links-wrapper">
                           <a href="https://www.linkedin.com/in/arthurcabrallemos/" target="_blank" class="social-link type-one-b" rel="noopener noreferrer nofollow ugc">
                              <div class="icon">
                                 <svg data-name="Outline Version" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M.81 7.95a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h4.86a.75.75 0 00.75-.75V8.7a.75.75 0 00-.75-.75zm4.11 13.93H1.56V9.45h3.36zM17.89 7.94a7.35 7.35 0 00-3.53.93V8.7a.75.75 0 00-.75-.75h-5.1a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h5.11a.75.75 0 00.75-.75v-7.25a1.39 1.39 0 012.79 0v7.25a.75.75 0 00.75.75h5.36a.75.75 0 00.75-.75V15.5c-.02-4.67-2.35-7.56-6.13-7.56zm4.62 13.94h-3.86v-6.5a2.89 2.89 0 00-5.79 0v6.5h-3.6V9.45h3.61v.84a.75.75 0 001.26.55 6.07 6.07 0 013.77-1.4c2.93 0 4.62 2.21 4.62 6.06zM3.24 7.13A3.25 3.25 0 100 3.88a3.25 3.25 0 003.24 3.25zm0-5a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75z"></path>
                                 </svg>
                              </div>
                              <div class="description">@ArthurCabral</div>
                           </a>
                           <a href="https://github.com/CabralPro" target="_blank" class="social-link type-one-b" rel="noopener noreferrer nofollow ugc">
                              <div class="icon">
                                 <svg data-name="Outline Version" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0a12 12 0 00-3.41 23.5 1.25 1.25 0 001.61-1.2V20a.75.75 0 00-.91-.73A2 2 0 016.66 18l-.11-.27.18.13a2.62 2.62 0 003.06.5.75.75 0 00.44-.58 4.84 4.84 0 01.38-1.36.75.75 0 00-.41-1.31c-2.4-.27-3.85-.66-3.85-3.66a3.1 3.1 0 01.83-2.15.75.75 0 00.14-.79 2.65 2.65 0 01-.06-1.57A5.46 5.46 0 019 7.81a.76.76 0 00.62.1 8.76 8.76 0 012.28-.31 8.67 8.67 0 012.29.31.75.75 0 00.62-.1 5.63 5.63 0 011.76-.87 2.66 2.66 0 01-.05 1.57.75.75 0 00.14.79 3.09 3.09 0 01.82 2.15c0 3-1.46 3.38-3.86 3.65a.75.75 0 00-.64.52.74.74 0 00.22.79 3.61 3.61 0 01.43 1.77v4.17a1.25 1.25 0 001.25 1.25 1.19 1.19 0 00.34 0A12 12 0 0012 0zm3.16 22v-3.82a5.94 5.94 0 00-.27-1.72c1.93-.31 4.12-1.18 4.12-5a4.62 4.62 0 00-.93-2.83 4.52 4.52 0 00-.24-2.73.75.75 0 00-.47-.44c-.26-.08-1.24-.25-3.09.92a10.19 10.19 0 00-4.7 0c-1.85-1.18-2.83-1-3.09-.92A.75.75 0 006 5.9a4.51 4.51 0 00-.24 2.73 4.62 4.62 0 00-.93 2.83c0 3.83 2.21 4.69 4.14 5-.07.24-.13.47-.17.66-.42.11-.65-.06-1.2-.47a7.19 7.19 0 00-2.81-1.38.75.75 0 00-.74 1.22 5.23 5.23 0 011.17 2 3.52 3.52 0 003.48 2.4V22a10.5 10.5 0 116.46 0z"></path>
                                 </svg>
                              </div>
                              <div class="description">CabralPro</div>
                           </a>
                        </div>
                        <div class="social-links-wrapper">
                           <a href="https://www.linkedin.com/in/arthurcabrallemos/" target="_blank" class="social-link type-one-b" rel="noopener noreferrer nofollow ugc">
                              <div class="icon">
                                 <svg data-name="Outline Version" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M.81 7.95a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h4.86a.75.75 0 00.75-.75V8.7a.75.75 0 00-.75-.75zm4.11 13.93H1.56V9.45h3.36zM17.89 7.94a7.35 7.35 0 00-3.53.93V8.7a.75.75 0 00-.75-.75h-5.1a.75.75 0 00-.75.75v13.93a.75.75 0 00.75.75h5.11a.75.75 0 00.75-.75v-7.25a1.39 1.39 0 012.79 0v7.25a.75.75 0 00.75.75h5.36a.75.75 0 00.75-.75V15.5c-.02-4.67-2.35-7.56-6.13-7.56zm4.62 13.94h-3.86v-6.5a2.89 2.89 0 00-5.79 0v6.5h-3.6V9.45h3.61v.84a.75.75 0 001.26.55 6.07 6.07 0 013.77-1.4c2.93 0 4.62 2.21 4.62 6.06zM3.24 7.13A3.25 3.25 0 100 3.88a3.25 3.25 0 003.24 3.25zm0-5a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75z"></path>
                                 </svg>
                              </div>
                              <div class="description">@ArthurCabral</div>
                           </a>
                           <a href="https://github.com/CabralPro" target="_blank" class="social-link type-one-b" rel="noopener noreferrer nofollow ugc">
                              <div class="icon">
                                 <svg data-name="Outline Version" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 0a12 12 0 00-3.41 23.5 1.25 1.25 0 001.61-1.2V20a.75.75 0 00-.91-.73A2 2 0 016.66 18l-.11-.27.18.13a2.62 2.62 0 003.06.5.75.75 0 00.44-.58 4.84 4.84 0 01.38-1.36.75.75 0 00-.41-1.31c-2.4-.27-3.85-.66-3.85-3.66a3.1 3.1 0 01.83-2.15.75.75 0 00.14-.79 2.65 2.65 0 01-.06-1.57A5.46 5.46 0 019 7.81a.76.76 0 00.62.1 8.76 8.76 0 012.28-.31 8.67 8.67 0 012.29.31.75.75 0 00.62-.1 5.63 5.63 0 011.76-.87 2.66 2.66 0 01-.05 1.57.75.75 0 00.14.79 3.09 3.09 0 01.82 2.15c0 3-1.46 3.38-3.86 3.65a.75.75 0 00-.64.52.74.74 0 00.22.79 3.61 3.61 0 01.43 1.77v4.17a1.25 1.25 0 001.25 1.25 1.19 1.19 0 00.34 0A12 12 0 0012 0zm3.16 22v-3.82a5.94 5.94 0 00-.27-1.72c1.93-.31 4.12-1.18 4.12-5a4.62 4.62 0 00-.93-2.83 4.52 4.52 0 00-.24-2.73.75.75 0 00-.47-.44c-.26-.08-1.24-.25-3.09.92a10.19 10.19 0 00-4.7 0c-1.85-1.18-2.83-1-3.09-.92A.75.75 0 006 5.9a4.51 4.51 0 00-.24 2.73 4.62 4.62 0 00-.93 2.83c0 3.83 2.21 4.69 4.14 5-.07.24-.13.47-.17.66-.42.11-.65-.06-1.2-.47a7.19 7.19 0 00-2.81-1.38.75.75 0 00-.74 1.22 5.23 5.23 0 011.17 2 3.52 3.52 0 003.48 2.4V22a10.5 10.5 0 116.46 0z"></path>
                                 </svg>
                              </div>
                              <div class="description">CabralPro</div>
                           </a>
                        </div>
                     </div>
                     <div class="bottom-ornament"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>
`

export const resumeHtml = originalHtml
	.replace('</html>', resumeHtmlstyle)
	.replaceAll('<span>· </span>', '<span> - </span>')

export const resumeHtmlToPrint = resumeHtml
	.replace('</html>', styleToPrint)
