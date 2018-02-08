export class Proyecto {

    public projectId: number;
    public jobname: string;
    public projectUrl: string;
  


    constructor( projectUrl: string,projectId: number, jobname: string) {
        this.projectId = projectId;
        this.jobname = jobname;
        this.projectUrl = projectUrl;
        

    }
}