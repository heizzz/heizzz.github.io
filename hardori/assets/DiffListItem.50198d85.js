import{r as g,o as e,c as a,t as i,b as o,d as c,f as n,w as d,n as f,F as r,g as s}from"./index.72084a3a.js";const m={key:0,class:"text-left px-4"},y={class:"text-left px-4"},b={class:"py-1 flex items-center justify-center"},h={key:0},k={key:1,title:"Global average difficulty rating is unavailable for this song",class:"text-slate-400"},R={key:2},I={key:3},N=s("-"),v={name:"DiffListItem",props:{rank:Number,songId:Number,songTitle:String,difficultyLevel:Number,difficultyId:Number,globalRating:Number,myRating:Number,hideGlobalRating:Boolean,hideRanking:Boolean},setup(t){const u=["EASY","NORMAL","HARD","EXPERT","SPECIAL"];return(x,$)=>{const l=g("RouterLink");return e(),a("tr",{class:f(["border-t border-slate-500",[(t.rank||0)%2==1?"bg-slate-800":"bg-slate-700"]])},[t.hideRanking?o("",!0):(e(),a("td",m,"#"+i(t.rank||"?"),1)),c("td",y,[n(l,{to:`/rate/${t.songId}/${t.difficultyId}`},{default:d(()=>[s(i(t.songTitle||"?"),1)]),_:1},8,["to"])]),c("td",b,[n(l,{to:`/rate/${t.songId}/${t.difficultyId}`,title:u[t.difficultyId||0],class:f([[`diff-${t.difficultyId||0}`],"w-8 h-8 rounded-full flex items-center justify-center"])},{default:d(()=>[s(i(t.difficultyLevel||"N/A"),1)]),_:1},8,["to","title","class"])]),t.hideGlobalRating?o("",!0):(e(),a(r,{key:1},[t.globalRating?(e(),a("td",h,i(t.globalRating),1)):(e(),a("td",k,i(t.difficultyLevel),1))],64)),t.myRating>=0?(e(),a("td",R,[n(l,{to:`/rate/${t.songId}/${t.difficultyId}`},{default:d(()=>[s(i(t.myRating),1)]),_:1},8,["to"])])):(e(),a("td",I,[n(l,{to:`/rate/${t.songId}/${t.difficultyId}`,title:"You have not rated this song",class:"text-slate-400"},{default:d(()=>[N]),_:1},8,["to"])]))],2)}}};export{v as _};
