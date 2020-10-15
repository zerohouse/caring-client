import {
    AlignmentType,
    Document,
    Paragraph,
    TextRun,
} from "docx";

export class doc_salary {

    public createSalary(sal_name: string, sal_number: string, sal_relation: string, officials: string, bank: string, account_number: string): Document {

        const document = new Document();

        const salary = {
            name : sal_name,
            number : sal_number,
            relation: sal_relation,
            official: officials,
            acc_number: account_number,
            bank: bank,
        };  //요양보호사 계약서에서 사용되는 변수

        document.addSection({
            children: [
                this.createPayAgreeFirst(),
                this.createPayAgreetitle("급여 이체 동의서"),
                this.createAgreetext(""),
                this.createPayAgreetext(salary),
                this.createAgreetext(""),
                this.createAgreename(salary),
                this.createAgreelast(),
            ],
        });

        return document;
    }  //요양보호사 계약서_본문

    public createAgreetext(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }   //요양보호사계약서 개인정보취급 본문 작성

    public createAgreename(caregiver: any): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
                new TextRun({
                    text: `동의자 : `,
                }),
                new TextRun({
                    text: `         ${caregiver.name}    (서명이나 도장)`,
                    underline: {},
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 개인정보취급 서명란 작성

    public createAgreelast(): Paragraph {
        return new Paragraph({
            border: {
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 개인정보취급 border

    public createPayAgreeFirst(): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 가족요양 급여공제동의서 border

    public createPayAgreetitle(text: string): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children:[
                new TextRun({
                    text: text,
                    bold: true,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    } //요양보호사계약서 가족요양 급여공제동의서 제목

    public createPayAgreetext(salary: any): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: `본인  ${salary.name}(${salary.number})은 개인사정으로 인하여 케어링의 급여를 본인의 계좌번호가 아닌 가족(관계: ${salary.relation} ${salary.official})의 계좌(${salary.bank} ${salary.acc_number} ${salary.official})로 이체 받기를 원하며, ${salary.relation} ${salary.official}에게 이체하여 주시는 것에 동의 합니다.`,
                })
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    } //요양보호사계약서 가족요양 급여공제동의서 본문

}  //docx파일 생성
