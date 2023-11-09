 const CardTitle = ({ title, description }) => {
   return (
     <div className="card-title">
       <h2>{title}</h2>
       <p>{description}</p>
     </div>
   );
 };

 const Wecan = () => {
   return (
     <section aria-label="How We Can Help">
       <div className="header">How We Can Help</div>
       <CardTitle
         title="FINANCIAL ASSISTANCE"
         description="We assist and link smallholder farmers with accredited financing channels, enabling them to access low interest loans as capital to increase production on a larger scale."
       />
       <CardTitle
         title="SPECIALLY CURATED RESOURCES"
         description="We provide our farmers with useful and result-driven resources about various agricultural practices to help foster growth in their transition to large-scale farming."
       />
       <CardTitle
         title="AFFORDABLE RAW MATERIALS"
         description="We partner with credible wholesale distributors of livestock feed, fertilizers, agrochemicals and mechanized farm equipment to supply our farmers at subsidized prices."
       />
       <CardTitle
         title="FARMERS’ NETWORK"
         description="We bring together a community of farmers and individuals practicing agriculture across all geo-political zones in Nigeria to foster knowledge sharing."
       />
       <CardTitle
         title="MARKET ACCESS"
         description="Hosting FarmFortify farmer’s market both online and offline drives in sales, provides visibility for farmers’ produce locally and globally, while also meeting increasing consumer demands."
       />
       <div>
         <img src="./farm-pic.png" alt="Farm image" />
       </div>
     </section>
   );
 };

 export default Wecan;