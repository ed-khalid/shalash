
class Router  {

    constructor(private metadata:Metadata) {

    }

    public navigate(pathname:string) {
        this.load(pathname).then(done => {
          window.history.pushState( { }, pathname, window.location.origin + '/' + pathname + '.html' );
        },(fail) => {
            console.error(fail);
        });
    }

    private load(articleNumber:string) {

        return new Promise((res,rej) => {
            fetch(`./articles/${articleNumber}.md`).then(res => res.text()).then(text => {
                const article= document.querySelector('#article #content');
                article.innerHTML = text;
                fetch(`./images/${articleNumber}.jpg`).then(res => res.blob()).then(data => {
                    const img:HTMLImageElement = document.querySelector("#article #image");
                    img.src = URL.createObjectURL(data); 
                })
                res();
            }, (fail) => rej(fail)) 
        })

    }

}
