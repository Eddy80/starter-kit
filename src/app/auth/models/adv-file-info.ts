export class AdvFileInfo{
  name:string;
  categoryId:number;
  categorySubId:number;
  personId: number;
  formId:number;
  documentTypeId:number;
  documentId:number;
  isSub:number;
  fileName:string;
  contentType:string;
  size:number;
  pageNumber:number;

  constructor(name: string, categoryId: number, categorySubId: number, personId: number, formId: number, documentTypeId: number, documentId: number, isSub: number, fileName: string,   contentType:string, size: number, pageNumber: number) {
    this.name = name;
    this.categoryId = categoryId;
    this.categorySubId = categorySubId;
    this.personId = personId;
    this.formId = formId;
    this.documentTypeId = documentTypeId;
    this.documentId = documentId;
    this.isSub = isSub;
    this.fileName = fileName;
    this.contentType = contentType;
    this.size = size;
    this.pageNumber = pageNumber;
  }
}
