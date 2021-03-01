import {
    AlignmentType,
    BorderStyle,
    Document,
    HeightRule,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    VerticalAlign,
    WidthType,
} from "docx";

const phoneReplace = /-/g;

export const phoneNumberFormat = (value: string) => {
    const phoneNumber = value.toString().replace(phoneReplace, '');
    let format: string = '';

    if(phoneNumber.length === 10 && phoneNumber.slice(0,2) === "02") {
        format = `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 10) {
        format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 11) {
        format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
    }
    return format;
};


export class docResignation {

    public createResignation(name, birth, address, phone, center, resig_number, resig_start, resig_end, resig_date): Document {
        const document = new Document();

        const contract = {
            birth: {
                year: birth.slice(0, 4),
                month: birth.slice(5, 7),
                day: birth.slice(8, 10),
            },
            date: {
                year: resig_date.slice(0, 4),
                month: resig_date.slice(5, 7),
                day: resig_date.slice(8, 10),
            },
            startDate: {
                year: resig_start.slice(0, 4),
                month: resig_start.slice(5, 7),
                day: resig_start.slice(8, 10),
            },
            endDate: {
                year: resig_end.slice(0, 4),
                month: resig_end.slice(5, 7),
                day: resig_end.slice(8, 10),
            },
        };  //수급자 계약서에서 사용되는 변수

        const table1 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "사\t직\t서",
                                        size: 40,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 4,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                    ],
                    height: {
                        height: 1500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "성    명",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${name}`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "생 년 월 일",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.birth.year}년 ${contract.birth.month}월 ${contract.birth.day}일`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),

                    ],
                    height: {
                        height: 500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "주민등록번호",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${resig_number}`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "연 락 처",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${phoneNumberFormat(phone)}`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "주소",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${address}`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                        }),
                    ],
                    height: {
                        height: 500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "회 사 명",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `케어링${center}센터`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "담 당 업 무",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `요양업무`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "입 사 일 자",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.startDate.year}년 ${contract.startDate.month}월 ${contract.startDate.day}일`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "퇴사희망일자",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.endDate.year}년 ${contract.endDate.month}월 ${contract.endDate.day}일`,
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "비고",
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children:[],
                            })],
                            columnSpan: 3,
                        }),
                    ],
                    height: {
                        height: 3000,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "상기   본인은   사직코자하오니   허락하여   주시기   바랍니다.",
                                        size: 22,
                                    })
                                ],
                            })],
                            columnSpan: 4,
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                    ],
                    height: {
                        height: 2000,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.date.year}년  ${contract.date.month}월  ${contract.date.day}일`,
                                        size: 22,
                                    })
                                ],
                            })],
                            columnSpan: 4,
                            verticalAlign: VerticalAlign.TOP,
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                    ],
                    height: {
                        height: 2000,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children:[
                                    new TextRun({
                                        text: `${name} (서명 또는 인)\t\t\t`,
                                        size: 22,
                                    })
                                ],
                            })],
                            columnSpan: 4,
                            verticalAlign: VerticalAlign.TOP,
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                    ],
                    height: {
                        height: 1500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: `\t 케어링${center}센터 귀중`,
                                        size: 22,
                                    })
                                ],
                            })],
                            columnSpan: 4,
                            verticalAlign: VerticalAlign.TOP,
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                }
                            }
                        }),
                    ],
                    height: {
                        height: 1000,
                        rule: HeightRule.ATLEAST,
                    },
                }),
            ],
        });  //수급자 계약서 첫번째 테이블

        document.addSection({
            children: [
                table1,
            ],
        });

        return document;
    }  //수급자_방문요양 계획서_본문

}  //docx파일 생성
