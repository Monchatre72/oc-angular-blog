export class Post {


  title:string;
  content:string;
  creationDate : Date;
  like : number;




constructor(  title:string,content:string, creationDate? :Date ) {
                if (!creationDate){
                this.creationDate=new Date(2012, 11, 24, 10, 33, 30, 0);} else {
                this.creationDate=creationDate;

                }
                this.like=0;
                this.title=title;
                this.content=content;
                }

}
