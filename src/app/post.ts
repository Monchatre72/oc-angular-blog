export class Post {

  title:string;
  content:string;
  loveIts : number;
  created_at : Date;

constructor(  title:string,
              content:string,
              created_at? :Date ,
              loveIts?:number   ) {

                this.title=title;
                this.content=content;
                if (!  created_at){this.created_at=new Date();}
                else {this.created_at=created_at;}
                if (!loveIts){this.loveIts=0;}
                else {this.loveIts= loveIts;}

                }

}
