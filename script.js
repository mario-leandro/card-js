// adicionando titulo ao head
const tituloHead = document.createElement('title');
tituloHead.textContent = "Card 100% JavaScript";

// Importando a fonte
const linkHead1 = document.createElement('link');
const linkHead2 = document.createElement('link');
const linkHead3 = document.createElement('link');

linkHead1.href = "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";
linkHead1.rel = "stylesheet";

linkHead2.href = "https://fonts.googleapis.com";
linkHead2.rel = "preconnect";

linkHead3.href = "https://fonts.gstatic.com";
linkHead3.rel = "preconnect", "crossorigin";

const head = document.head;

head.appendChild(linkHead1);
head.appendChild(linkHead2);
head.appendChild(linkHead3);
head.appendChild(tituloHead);

// Pegando e estilizando body
const body = document.body;
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "border-box";
body.style.height = "100vh";
body.style.background = "#f5f5f5"
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.fontFamily = `'Inter', sans-serif`;

function container () {
    const divContainer = document.createElement("div");
    body.appendChild(divContainer);

    // CSS
    divContainer.style.width = "350px";
    divContainer.style.height = "350px";
    divContainer.style.background = "#dddddd";
    divContainer.style.boxShadow = "1px 5px 8px 4px #cccccc";
    divContainer.style.display = "flex";
    divContainer.style.flexDirection = "column";

    function miniHeader () {
        const miniHeader = document.createElement("div");
        divContainer.appendChild(miniHeader);

        //CSS
        miniHeader.style.width = "100%"
        miniHeader.style.height = "150px"
        miniHeader.style.background = "#3E2B96";
        miniHeader.style.display = "flex";
        miniHeader.style.flexDirection = "row";
        miniHeader.style.justifyContent = "center";
        miniHeader.style.alignItems = "center";

        function addImagem () {
            const divImg = document.createElement("div");
            miniHeader.appendChild(divImg);

            //CSS
            divImg.style.width = "130px";
            divImg.style.height = "130px";
            divImg.style.borderRadius = "100px";
            divImg.style.position = "relative";
            divImg.style.top = "50px";


            const img = document.createElement("img");
            divImg.appendChild(img);
            img.src = "./img/profile-pic.png";

            //CSS
            img.style.width = "100%";
            img.style.height = "100%";
        }

        addImagem();
    }

    function miniMain () {
        const miniMain = document.createElement("div");
        divContainer.appendChild(miniMain);

        //CSS
        miniMain.style.width = "100%";
        miniMain.style.height = "200px";
        miniMain.style.background = "#f5f5f5"

        function divApresentacao () {
            const divTexto = document.createElement("div");
            miniMain.appendChild(divTexto);

            //CSS
            divTexto.style.width = "100%";
            divTexto.style.height = "100px";

            function nomeCard () {
                const nome = document.createElement("h2");
                divTexto.appendChild(nome);
                nome.textContent = "Mario Leandro Silva Marques"
    
                //CSS
                nome.style.color = "#E0C600";
                nome.style.textAlign = "center";
                nome.style.marginTop = "50px"
                nome.style.textTransform = "UpperCase";
                nome.style.fontSize = "18px";
            }
    
            function descricaoCard () {
                const descricao = document.createElement("p");
                divTexto.appendChild(descricao);
                descricao.textContent = "Desenvolvedor FullStack";
                
                //CSS 
                descricao.style.textAlign = "center";
                descricao.style.color = "#A39003"
                descricao.style.textTransform = "UpperCase";
                descricao.style.fontSize = "14px";
            }
            
            nomeCard();
            descricaoCard();
        }

        function divLinks () {
            const divLink = document.createElement("div");
            miniMain.appendChild(divLink);

            //CSS
            divLink.style.width = "100%";
            divLink.style.height = "100px";
            divLink.style.display = "flex";
            divLink.style.flexDirection = "row";
            divLink.style.justifyContent = "space-evenly";

            function links () {
                const link1 = document.createElement("a");
                const link2 = document.createElement("a");
                divLink.appendChild(link1);
                divLink.appendChild(link2);

                link1.textContent = "LinkedIn";
                link1.href = "https://www.linkedin.com/in/dev-mariosilva/";

                link2.textContent = "Portfólio";
                link2.href = "https://mario-leandro.netlify.app/";

                //CSS
                link1.style.background = "#17008A";
                link1.style.color = "#FFFFFF";
                link1.style.textDecoration = "none";
                link1.style.width = "100px";
                link1.style.height = "30px";
                link1.style.display = "flex";
                link1.style.justifyContent = "center";
                link1.style.alignItems = "center";
                link1.style.borderRadius = "15px";
                link1.addEventListener("mouseover", () => {
                    link1.style.color = "#E0C600";
                });
                link1.addEventListener("mouseleave", () => {
                    link1.style.color = "#FFFFFF";
                });

                link2.style.background = "#17008A";
                link2.style.color = "#FFFFFF";
                link2.style.textDecoration = "none";
                link2.style.width = "100px";
                link2.style.height = "30px";
                link2.style.display = "flex";
                link2.style.justifyContent = "center";
                link2.style.alignItems = "center";
                link2.style.borderRadius = "15px";
                link2.addEventListener("mouseover", () => {
                    link2.style.color = "#E0C600";
                });
                link2.addEventListener("mouseleave", () => {
                    link2.style.color = "#FFFFFF";
                });
            }

            links();
        }

        divApresentacao();
        divLinks();
    }

    miniHeader();
    miniMain();
}

container();