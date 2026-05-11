import React, {useState, useEffect} from "react";

const Writing = () =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const MEDIUM_RSS_URL = "https://medium.com/feed/@maxineattobrah";

    useEffect(()=>{
        fetchMediumArticles();
    },[]);

    const fetchMediumArticles = async() =>{
        try{
            const response = await fetch(
                "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@maxineattobrah"

            );

            const data = await response.json();

            if(data.status === "ok"){
                // titles of selected articles
                const pinnedTitles = [
                    "5 Must-Know Python Libraries for Machine Learning: A Guide for Beginners",
                    "11 Ways to Evaluate Machine Learning Models You Should Know",
                ];

                const pinnedArticles = data.items.filter(item => pinnedTitles.includes(item.title)).map(item =>({
                    title: item.title,
                    link: item.link,
                    description: item.description
                    .replace(/<[^>]*>/g,'').substring(
                        0,50
                    )+'...',
                    thumbnail: item.thumbnail || extractFirstImage(item.content),
                }));

                console.log(pinnedArticles);

                setArticles(pinnedArticles);


                   // get latest 3 articles
                // const lastestArticles = data.items.slice(0,3).map(item =>({
                //     title: item.title,
                //     link: item.link,
                //     description: item.description
                //     .replace(/<[^>]*>/g,'').substring(
                //         0,50
                //     )+'...',
                //     thumbnail: item.thumbnail || extractFirstImage(item.content),
                // }));

                // setArticles(lastestArticles);
            }

        }catch(e){
            console.error("Error fetching medium articles:", e);

        }finally{
            setLoading(false);
        }

    };

    const extractFirstImage = (content) =>{
        const match = content.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] :null;

    };


    if(loading){
        return(
            <section className="py-32 bg-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <p className="text-gray-600">Loading articles...</p>
                </div>
            </section>
        );
    }

    return(
        <section id="writing" className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="mb-20">
                    <div className="text-sm tracking-[0.3em] text-purple-400 mb-6 uppercase">
                        Writing
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-white">
                        Selected Articles 
                    </h2>
                    <p className="text-gray-400 text-lg">
                        My thoughts on AI/ML engineering and building intelligent systems.
                    </p>
                </div>
                <div className="max-w-4xl">
                    {articles.map((article, index)=>(
                        <a href={article.link} className="grid grid-cols-[120px_1fr] gap-6 py-8 border-b border-white/10 last:border-b-0 group">
                            {article.thumbnail &&(
                                <div className="aspect-video bg-cover bg-center rounded-lg" style={{backgroundImage: `url(${article.thumbnail})`}}></div>
                            )}
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-2">
                                    {article.description}
                                </p>
                                <span className="text-purple-400 text-sm flex items-center gap-2">
                                    Read on Medium
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-12">
                    <a href={`https://medium.com/@maxineattobrah`}
                    className="inline-block px-8 py-4 border border-white text-white hover:text-gray transition-colors">
                        View All Articles
                    </a>
                </div>
            </div>
        </section>
    );

}

export default Writing;

