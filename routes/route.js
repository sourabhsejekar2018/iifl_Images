exports.home=function(req,res){
    res.render('home',{title:'My Best Company',
                      headline:'IIFL very good Stock Market company'
                      });
                    }
  
  
  exports.company=function(req,res){
      var companyName=req.params.company;
      var title,heading;
      var imageCount=4;
  
      if(companyName==='news'){
         title="News";
         heading="News:IIFL serves more than 4 million satisfied customers across various business segments and is continuously building on its strengths to deliver excellent service to its expanding customer base.";
      }
      else if(companyName==='chess'){
         title="Chess";
         heading="Chess: We can incress knowlage and new idea";
      }
      else if(companyName==='cricket'){
         title="Cricket";
         heading="Cricket: play cricket you need to be fit and strong, and have good hand-eye coordination and ball-handling skills";
      }
      else if(companyName==='carom'){
         title="Carom";
         heading="Board games play a very important role in health and brain development";
      }
      else if(companyName==='boss'){
         title="Boss";
         heading="Boss: Boss provide good idea and guidance:";
         imageCount=4;
      }
  
      res.render('company',{
          title:title,
          headline:heading,
          company:companyName,
          numberOfImages:imageCount});
    }
  