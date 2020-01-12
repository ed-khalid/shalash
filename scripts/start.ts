
 fetch('metadata.json').then(response => response.json()).then((metadata:Metadata) => {

            const toc = document.getElementById('toc'); 
            const router = new Router(metadata); 

            metadata.articles.forEach((article,i) => {
                const li  = document.createElement('li');  
                li.classList.add('article-link');
                const title = document.createElement('span');
                title.textContent = article.title;
                const date = document.createElement('span');
                date.textContent = article.date;
                li.append(title);
                li.append(date);
                const v = i+1; 
                const num = ( v < 10) ? '0' + (v) : (v); 
                li.onclick = () => router.navigate(num + '');
                toc.append(li);
            })
        });  



   interface Metadata {
        articles:{date:string, title:string}[]
   } 
         