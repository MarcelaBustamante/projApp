export class Proyecto{

    public projectId: number;
    public name: string;
    public projectUrl: string;
    public projectOwner:object;
 

    constructor(projectId: number, name: string, projectUrl: string,projectOwner:object){
        this.projectId = projectId;
        this.name = name;
        this.projectUrl = projectUrl;
        this.projectOwner=projectOwner;
        
   }    
}