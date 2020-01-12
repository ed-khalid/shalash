
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
                const article= document.getElementById('article');
                article.innerHTML = text;
                res();
            }, (fail) => rej(fail)) 
        })

    }

}
