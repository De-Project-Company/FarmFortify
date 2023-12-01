import { Link } from "react-router-dom"
import { articles } from "../../DataCalls/Articles"

const Articles = () => {
  return (
    <div className="bg-lightGreen py-[72px] px-7 md:px-[4vw]">
      <header className="flex justify-between pb-[45px]">
        <h5 className="text-3xl font-[AeonikBold] ">Latest Articles</h5>
        <p className="text-lg text-grey font-[AeonikReg]">See More &gt;</p>
      </header>
      <main className="flex flex-wrap md:grid md:grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-3 place-items-center ">
        {articles.map((x,index) =>(
          <Link key={index}>
            <div className="w-full max-w-[380px]">
              <img src={x.img} alt={x.img} />
              <div className="px-6 py-5 bg-white flex flex-col gap-3 h-[180px]">
                <h3 className="text-xl text-black font-[AeonikMed] leading-7">
                  {x.headingText}
                </h3>
                <div className="flex gap-4 text-sm ">
                  <button className="bg-deepGreen text-white p-[6px] rounded">{x.buttonText}</button>
                  <p className="text-grey font-[AeonikLight]">{x.date}</p>
                </div>
                <p className="text-black text-sm">by <span className="text-base font-[AeonikMed]">{x.editor}</span></p>
              </div>
            </div>
          </Link>
        ))}
      </main>

      
    </div>
  )
}

export default Articles
