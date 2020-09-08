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






export class docRec {

    public createRecipient(name: string, level: string, birth: string, address: string, phone: string, sortation: string, center: string, pname: string, relation: string, pbirth: string, pphone: string, paddress: string, contract_start: string, contract_end: string, useday: string, usestime: string, useetime: string, contract_date: string): Document {
        const document = new Document();

        const contract = {
            user: {
                birth: birth.replace(/-/g, "."),
                starthour: usestime.slice(0, 2),
                startmin: usestime.slice(3, 5),
                endhour: useetime.slice(0, 2),
                endmin: useetime.slice(3, 5),
            },
            protector:{
                birth: pbirth.replace(/-/g, "."),
            },
            date: {
                year: contract_date.slice(0, 4),
                month: contract_date.slice(5, 7),
                day: contract_date.slice(8, 10),
            },
            startDate: {
                year: contract_start.slice(0, 4),
                month: contract_start.slice(5, 7),
                day: contract_start.slice(8, 10),
            },
            endDate: {
                year: contract_end.slice(0, 4),
                month: contract_end.slice(5, 7),
                day: contract_end.slice(8, 10),
            },
            Pay: {
                thirty: "14,530",
                sixty: "22,310",
                ninety: "29,920",
                oneHtwenty: "37,780",
                oneHfifty: "42,930",
                oneHeighty: "47,460",
                twoHten: "51,630",
                twoHfourty: "55,490",
            },
            LimitAmount: {
                level1: "1,498,300",
                level2: "1,331,800",
                level3: "1,276,300",
                level4: "1,173,200",
                level5: "1,007,200",
                Lastlevel: "566,600",
            },
        };  //수급자 계약서에서 사용되는 변수

        const table1 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "계약당사자",
                                        size: 24,
                                        bold: true,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 5,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                    ],
                    height: {
                        height: 800,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [],
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "성  명",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${name}   (인)`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "등급",
                                        size: 24,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "(인정번호)",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${level}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 23,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                            }
                        }),
                    ],
                    height: {
                        height: 1000,
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
                                        text: "이용자",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.BOTTOM,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "생년월일",
                                        size: 24,
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
                                        text: `${contract.user.birth}`,
                                        size: 24,
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
                                        text: "연락처",
                                        size: 24,
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
                                        text: `${phone}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                    ],
                    height: {
                        height: 800,
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
                                        text: "(갑)",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.TOP,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "주소",
                                        size: 24,
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
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            },
                        }),
                    ],
                    height: {
                        height: 1000,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [],
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "기타",
                                        size: 24,
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
                                        text: ` ${etc(sortation,"일반")} `,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: `일반 [`,
                                        size: 24,
                                    }),
                                    new TextRun({
                                        text: ` ${etc(sortation, "40%")} `,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: `40%`,
                                        size: 24,
                                    }),
                                    new TextRun({
                                        text: ` ${etc(sortation, "50%")} `,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: `50%`,
                                        size: 24,
                                    }),
                                    new TextRun({
                                        text: ` ${etc(sortation, "60%")} `,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: `60% 경감대상자]`,
                                        size: 24,
                                    }),
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: ` ${etc(sortation, "국민")} `,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: `국민기초생활 수급권자`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                    ],
                    height: {
                        height: 1200,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [],
                            borders: {
                                bottom:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "시설명",
                                        size: 24,
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
                                        text: `케어링  ${center}센터`,
                                        size: 24,
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
                                        text: "시설종류",
                                        size: 24,
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
                                        text: "방문요양, 방문목욕",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                    ],
                    height: {
                        height: 800,
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
                                        text: "제공자 (을)",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                top:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                bottom:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "시설장 성명",
                                        size: 24,
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
                                        text: `${center_captain(center)}  (인)`,
                                        size: 24,
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
                                        text: "연락처",
                                        size: 24,
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
                                        text: `${center_tel(center)}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                    ],
                    height: {
                        height: 800,
                        rule: HeightRule.ATLEAST,
                    },
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [],
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "주소",
                                        size: 24,
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
                                        text: `${center_address(center)}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            borders: {
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
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
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "대리인",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.BOTTOM,
                            borders: {
                                bottom:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "성 명",
                                        size: 24,
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
                                        text: `${pname}  (인)`,
                                        size: 24,
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
                                        text: "관 계",
                                        size: 24,
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
                                        text: `'갑'의 (${relation})`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            },
                        }),
                    ],
                    height: {
                        height: 800,
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
                                        text: "또는",
                                        size: 24,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "보호자",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                top:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                bottom:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "생년월일",
                                        size: 24,
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
                                        text: `${contract.protector.birth}`,
                                        size: 24,
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
                                        text: "연락처",
                                        size: 24,
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
                                        text: `자택 )`,
                                        size: 24,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `이동전화)${pphone}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                            },
                        }),
                    ],
                    height: {
                        height: 1000,
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
                                        text: "(병)",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.TOP,
                            borders: {
                                top:{
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "#000000",
                                },
                                bottom:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                left:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                }
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "주소",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                bottom:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                            }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${paddress}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            borders: {
                                bottom:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
                                right:{
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                    color: "#000000",
                                },
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

        const table2 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "구분",
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "이용일",
                                        size: 22,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 40,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "이용시간",
                                        size: 22,
                                    })
                                ],
                            })],
                            columnSpan: 2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "이용",
                                        size: 22,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "시간",
                                        size: 22,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "(1)",
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
                                        text: `${useday_check(useday,"월")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 월 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: `${useday_check(useday,"화")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 화 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: `${useday_check(useday,"수")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 수 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: `${useday_check(useday,"목")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 목",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${useday_check(useday,"금")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 금 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: `${useday_check(useday,"토")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 토 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: `${useday_check(useday,"일")}`,
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 일",
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
                                        text: `${usetime_check(Number(contract.user.starthour))}    ${contract.user.starthour}시   ${contract.user.startmin}분   ~`,
                                        size: 22,
                                        bold: true,
                                    }),
                                ],
                            }), new Paragraph(""),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children:[
                                        new TextRun({
                                            text: `${usetime_check(Number(contract.user.endhour))}     ${contract.user.endhour}시   ${contract.user.endmin}분`,
                                            size: 22,
                                            bold: true,
                                        }),
                                    ],
                                })],
                            columnSpan: 2,
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 1600,
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
                                        text: "이용",
                                        size: 22,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "시간",
                                        size: 22,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "(2)",
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
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 월 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 화 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 수 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 목",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 금 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 토 ",
                                        size: 22,
                                    }),
                                    new TextRun({
                                        text: "□",
                                        size: 40,
                                    }),
                                    new TextRun({
                                        text: " 일",
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
                                        text: "오전",
                                        size: 22,
                                    }),
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "오후",
                                        size: 22,
                                    }),
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "오전",
                                        size: 22,
                                    }),
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "오후",
                                        size: 22,
                                    }),
                                ],
                            })],
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 0,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children:[
                                    new TextRun({
                                        text: "시  분  ~",
                                        size: 22,
                                    }),
                                ],
                            }), new Paragraph(""),
                                new Paragraph({
                                    alignment: AlignmentType.LEFT,
                                    children:[
                                        new TextRun({
                                            text: "시  분",
                                            size: 22,
                                        }),
                                    ],
                                })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 0,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                    height: {
                        height: 1600,
                        rule: HeightRule.ATLEAST,
                    },
                }),
            ],
        });  //수급자 계약서 두번째 테이블

        const table3 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "구분",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "월",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "화",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "수",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "목",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "금",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "토",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "일",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "비고",
                                        size: 22,
                                    })
                                ],
                            })],
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "이용시간1",
                                        size: 22,
                                    })
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "※이용시간2는",
                                        size: 12,
                                    })
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "1일 2회 이용할 ",
                                        size: 12,
                                    })
                                ],
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "이용시간2",
                                        size: 22,
                                    })
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "경우 기재함",
                                        size: 12,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.TOP,
                        }),
                    ],
                }),
            ],
        });  //수급자 계약서 세번째 테이블

        const table4 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "구 분",
                                        size: 24,
                                    })
                                ],
                            })],
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "금액(원)",
                                        size: 24,
                                    })
                                ],
                            })],
                            width: {
                                size: 23,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "구 분",
                                        size: 24,
                                    })
                                ],
                            })],
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "금액(원)",
                                        size: 24,
                                    })
                                ],
                            })],
                            width: {
                                size: 23,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 600,
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
                                        text: "30분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.thirty}`,
                                        size: 24,
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
                                        text: "150분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.oneHfifty}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 600,
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
                                        text: "60분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.sixty}`,
                                        size: 24,
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
                                        text: "180분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.oneHeighty}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 600,
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
                                        text: "90분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.ninety}`,
                                        size: 24,
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
                                        text: "210분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.twoHten}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 600,
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
                                        text: "120분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.oneHtwenty}`,
                                        size: 24,
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
                                        text: "240분 이상",
                                        size: 24,
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
                                        text: `${contract.Pay.twoHfourty}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                    height: {
                        height: 600,
                        rule: HeightRule.ATLEAST,
                    },
                }),
            ],
        });  //수급자 계약서 네번째 테이블

        const table5 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "1등급",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "2등급",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "3등급",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "4등급",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "5등급",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: "인지지원등급",
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
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
                                        text: `${contract.LimitAmount.level1}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.LimitAmount.level2}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.LimitAmount.level3}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.LimitAmount.level4}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.LimitAmount.level5}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${contract.LimitAmount.Lastlevel}`,
                                        size: 24,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                    ],
                    height: {
                        height: 500,
                        rule: HeightRule.ATLEAST,
                    },
                }),
            ],
        });  //수급자 계약서 다섯번째 테이블

        const table6 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "구 분",
                                        size: 24,
                                    }),
                                ],
                            })],
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "재가급여",
                                        size: 24,
                                    }),
                                ],
                            })],
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "일반",
                                        size: 24,
                                    }),
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "15%",
                                        size: 24,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "기초수급권자",
                                        size: 24,
                                    }),
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "0%",
                                        size: 24,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "기타 의료수급권자",
                                        size: 24,
                                    }),
                                ],
                            }), new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "차상위 의료급여 건강보험 자격전환자(희귀난치성 만성질환자)",
                                        size: 24,
                                    }),
                                ],
                            }), new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "저소득층(본인 일부 부담금 감경을 위한 소득 재산 등이 일정금액 이하인 자에 관한 고시 해당자)",
                                        size: 24,
                                    }),
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "40%~60%",
                                        size: 24,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),
            ],
        });  //수급자 계약서 여섯번째 테이블
        document.addSection({
            children: [
                this.createRecTitle1(),
                this.createRecTitle2(),
                this.createText(""),
                this.createText(""),
                this.createCaring(),
                this.createText11("이용자, 제공자 및 대리인(보호자)은 장기요양급여 중 시설급여 이용에 대하여 다음과 같은 조건으로 계약을 체결한다."),
                table1,
                this.createText13("제1조(목적) ", "고령이나 노인성질병 등으로 인하여 혼자서 일상생활을 수행하기 어려운 노인들 중 장기요양등급을 받은 분들에게 방문요양급여를 제공하여 노후의 건강증진 및 생활안정을 도모하고 그 가족의 부담을 덜어줌으로써 삶의 질을 향상시키고자 한다. "),
                this.createText(""),
                this.createText13title("제2조(계약기간)"),
                this.createText(""),
                this.createText13content(`① 계약기간은 ${contract.startDate.year}년 ${contract.startDate.month}월 ${contract.startDate.day}일부터 ${contract.endDate.year}년 ${contract.endDate.month}월 ${contract.endDate.day}일까지로 한다. `),
                this.createText13content("② 제1항의 계약기간은 당사자 간의 협의에 따라 변경할 수 있다."),
                this.createText(""),
                this.createText13("제3조(급여범위) ",") 방문요양급여는 장기요양요원이 ‘갑’의 가정 등을 방문하여 신체활동 및 가사활동 등을 지원하는 장기요양급여로 한다."),
                this.createText(""),
                this.createText13title("제4조(급여이용 및 제공) "),
                this.createText(""),
                this.createText13content("① 방문요양급여 이용 및 제공은 장기요양급여 이용(제공)계획서에 의한다."),
                this.createText13content("② ‘갑’의 방문요양급여 이용시간은 아래와 같이 한다."),
                table2,
                this.createText12("※ 요일에 따라 이용시간이 다른 경우 이용시간 기재란을 늘려서 기록함"),
                this.createText12("※ ‘갑’ 또는 ‘병’은 사정에 의해 일시적으로 이용시간을 지키기 어려운 경우 서비스 이용시작 최소 1시간 전에 ‘을’에게 연락을 취해야 함."),
                this.createText(""),
                this.createText13content("③ ‘을’의 방문요양급여 제공시간은 아래와 같다. 다만, 1일 2회 방문요양급여를 제공하는 경우에는 2시간 이상의 간격으로 제공한다."),
                table3,
                this.createText13content("④ ‘관공서의 공휴일에 관한 규정’에 의한 공휴일에 급여를 제공하는 경우에는 ‘을’은 30%의 할증비용을 청구할 수 있다."),
                this.createText(""),
                this.createText13content("⑤ 야간(18:00~22:00), 심야(22:00~06:00)에 급여를 제공하는 경우에는 ‘을’은 야간 20%, 심야 30%의 할증 비용을 청구할 수 있다."),
                this.createText(""),
                this.createText13content("⑥ 야간․심야․휴일가산이 동시에 적용되는 경우에는 중복하여 가산하지 않는다."),
                this.createText(""),
                this.createText13content("⑦‘을’은 익월 장기요양급여 제공을 하고자하는 경우에는‘갑’(또는 ‘병’)과 협의하여 당월 O일까지 별지 제1호서식의 장기요양급여 이용계획서를 작성하고 장기요양급여 이용계획서에 따라 장기요양급여를 제공 한다."),
                this.createText(""),
                this.createText13title("제5조(계약자 의무)"),
                this.createText13content("① ‘갑’은 다음 각 호를 성실하게 이행하여야 한다."),
                this.createText(""),
                this.createText13content("   1. 월 이용료 납부"),
                this.createText13content("   2. 방문요양급여 범위내 급여이용"),
                this.createText13content("   3. 장기요양급여 이용수칙 준수"),
                this.createText13content("   4. 기타 ‘을’과 협의한 규칙 이행"),
                this.createText(""),
                this.createText13content("② ‘을’은 다음 각 호를 성실하게 이행하여야 한다."),
                this.createText(""),
                this.createText13content("   1. 방문요양급여 제공 계약내용 준수"),
                this.createText13content("   2. 급여제공 중 ‘갑’에게 신병 이상이 생기는 경우 즉시 ‘병’에게 통보"),
                this.createText13content("   3. 급여제공시간에 ‘갑’의 주변 및 집기류의 청결 및 유지관리"),
                this.createText13content("   4. 급여제공 중 알게 된 ‘갑’의 신상 및 질환 증에 관한 비밀유지"),
                this.createText13content("   (단, 치료 등의 조치가 필요한 경우는 예외)"),
                this.createText13content("   5. 이용상담, 지역사회 다른 서비스 이용 정보제공"),
                this.createText13content("   6. 노인학대 예방 및 노인인권 보호 준수 "),
                this.createText13content("   7. 기타 ‘갑’(또는 ‘병’)의 요청에 협조"),
                this.createText(""),
                this.createText13content("③ ‘병’은 다음 각 호를 성실하게 이행하여야 한다."),
                this.createText(""),
                this.createText13content("   1. ‘갑’에 관한 건강 및 필요한 자료제공"),
                this.createText13content("   2. ‘갑’의 월 이용료 등 비용 부담"),
                this.createText13content("   3. 인적 사항 및 장기요양보험 등급 변경 시 즉시 ‘을’에게 통보"),
                this.createText13content("   4. ‘갑’에 대한 의무이행이 어려울시 대리인 선정 및 ‘을’에게 통보"),
                this.createText13content("   5. 기타 ‘을’의 협조요청 이행"),
                this.createText(""),
                this.createText13title("제6조(계약해지 요건)"),
                this.createText(""),
                this.createText13content("① ‘갑’(또는 ‘병’)은 다음 각호에 해당되는 경우에는 ‘을’과 협의하여 계약을 해지 할 수 있다."),
                this.createText(""),
                this.createText13content("   1. 제2조의 계약기간이 만료된 경우"),
                this.createText13content("   2. 제3조의 방문요양급여 범위에 해당하는 서비스를 이행하지 아니한 경우"),
                this.createText13content("   3. 제4조제2항의 방문요양급여 제공시간을‘갑’(또는‘병’)의 동의 없이 ‘을’이 임의로 변경하거나 배치된 장기요양요원을 임의로 변경 했을 경우"),
                this.createText13content("   4. 기타 ‘갑’의 계약해지 사유가 발생한 경우"),
                this.createText(""),
                this.createText13content("② ‘을’은 다음 각호에 해당되는 경우에는 ‘갑’(또는 ‘병’)과 협의하여 계약을 해지 할 수 있다."),
                this.createText(""),
                this.createText13content("   1. 제2조의 계약기간이 만료되거나 사망한 경우"),
                this.createText13content("   2. ‘갑’이 장기요양보험 등급외자로 등급변경이 발생한 경우"),
                this.createText13content("   3. ‘갑’의 건강진단 결과「감염병의예방및관리에대한법률」에 따른 감염병 환자로서 감염의 위험성이 있는 경우로 판정될 때"),
                this.createText13content("   4. ‘갑’의 건강상의 이유로 서비스 이용이 어려울 때"),
                this.createText13content("   5. 이용계약시 제시된 이용안내를 ‘갑’이 정당한 이유 없이 따르지 않는 등 서비스 제공에 심각한 지장을 줄 때"),
                this.createText13content("   6. ‘갑’이 월 5회 이상 무단으로 방문요양급여 이용시간과 장소를 지키지 아니하였을 때 "),
                this.createText(""),
                this.createText13title("제7조(계약의 해지) "),
                this.createText(""),
                this.createText13content("①‘갑’(또는‘병’)은 제6조제1항의 계약해지 요건이 발생한 경우에는 해당일 또는 계약기간 만료일전에 별지 제2호서식의 장기요양급여 종결 신청서를 제출하여야 한다. 다만, 기타 부득이한 경우에는 우선 유선으로 할 수 있다."),
                this.createText(""),
                this.createText13content("②‘을’은 제6조제2항에 의한 계약해지 요건이 발생한 경우에는 계약해지 의사를 별지 제2호서식의 장기요양급여 종결안내서 및 관련 증빙서류와 함께 ‘갑’과 ‘병’에게 통보하고 충분히 설명해야 한다."),
                this.createText(""),
                this.createText13title("제8조(이용료 납부)"),
                this.createText(""),
                this.createText13content("① 방문요양급여비용 및 본인부담 기준은 별표 1과 같다."),
                this.createText13content("②‘을’은 전월 1일부터 말일까지의 이용료를 매월 10일에 정산하고 ‘갑’(또는 ‘병’)에게 25일까지 별지 제3호서식의 장기요양급여 이용료 세부내역서를 통보한다."),
                this.createText13content("③ ‘갑’은 매월 이용료를 계좌이체로 말일까지 납부 한다. 다만, 납부일이 \n" +
                    "공휴일인 경우에는 그 익일로 한다."),
                this.createText13content("④ ‘을’은 ‘갑’이 납부한 비용에 대해서는 별지 제4호서식의 장기요양급여 납부확인서를 발급한다."),
                this.createText(""),
                this.createText13("제9조(재계약) ", "다음 각호에 해당하는 경우에는 이를 반영한 계약서를 재작성한다."),
                this.createText(""),
                this.createText13content("   1. 제2조의 계약기간이 만료된 경우"),
                this.createText13content("   2. 장기요양 인정등급이 변경된 경우"),
                this.createText13content("   3. 방문요양 급여비용 및 본인부담 비용이 변경된 경우"),
                this.createText13content("   4. 기타 ‘갑’과 ‘을’이 필요한 경우"),
                this.createText(""),
                this.createText13title("제10조(건강관리)"),
                this.createText(""),
                this.createText13content("①‘을’은‘갑’의 건강 및 감염병 예방을 위하여 종사자들에게 연 1회 이상 건강진단을 실시하여야 한다. "),
                this.createText(""),
                this.createText13content("②‘을’은 장기요양요원이 방문요양급여 제공도중 ‘갑’에게 상해를 입혔을 경우 적절한 조치를 취해야 한다."),
                this.createText(""),
                this.createText13title("제11조(위급 시 조치)"),
                this.createText(""),
                this.createText13content("①‘을’은 방문요양급여 제공시간에 ‘갑’의 생명이 위급한 상태라고 판단된 때에는 ‘갑’(또는 ‘병’)이 지정한 병원 또는 관련 의료기관으로 즉시 후송하고 ‘병’에게 즉시 통보하여야 한다."),
                this.createText(""),
                this.createText13content("②‘병’은 제1항의 규정에 의한 통보를 받았을 때에는 신속하게 대처하여야 한다. 다만, 대처가 어려울 경우에는 우선 진료를 받을 수 있도록 조치하여야 한다."),
                this.createText(""),
                this.createText13content("③‘갑’이 서비스 이용도중 사망하였을 경우‘을’은 즉시‘병’에게 통보한다."),
                this.createText(""),
                this.createText13title("제12조(개인정보 보호의무)"),
                this.createText(""),
                this.createText13content("① ‘갑’은 본인의 개인정보에 대해 알 권리가 있다."),
                this.createText13content("② ‘을’은 ‘갑’의 개인정보를 관계규정에 따라 보호하여야 한다."),
                this.createText13content("③ ‘을’은 장기요양서비스 제공에 필요한 ‘갑’의 개인 정보 자료를 수집하고 활용하며 동 자료를 노인장기요양보험 운영주체 등에게 관계규정에 따라 제출할 수 있다."),
                this.createText13content("④ ‘을’은 개인정보수집 및 활용을 하고자 하는 경우에는 ‘갑’에게 별지 제5호서식의 개인정보제공 및 활용 동의서를 받아야 한다."),
                this.createText13content("⑤ ‘을’은 ‘갑’의 사생활을 존중하고, 업무상 알게 된 개인정보는 철저히 비밀을 보장한다. "),
                this.createText(""),
                this.createText13("제13조(기록 및 공개) ", "‘을’은 ‘갑’의 생활과 장기요양서비스에 관한 모든 내용을 상세히 관찰하여 정확히 기록하고, ‘갑’(또는 ‘병’)이 요구할 경우에는 표준양식에 의거한 기록을 공개하여야 한다."),
                this.createText(""),
                this.createText13title("제14조(배상책임)"),
                this.createText(""),
                this.createText13content("①‘을’은 다음 각호의 경우에는‘갑’(또는‘병’)에게 배상의무가 있으며 배상책임은 관계규정에 따른다."),
                this.createText13content("   1. 장기요양요원(또는‘을’)의 고의나 과실로 인하여 ‘갑’을 부상케 하는 등 건강을 상하게 하거나 사망에 이르게 하였을 때"),
                this.createText13content("   2. 장기요양요원(또는‘을’)의 학대(노인복지법 제1조의2 제4호의 노인학대 및 같은 법 제39조의9의 금지행위를 말한다)로 인하여 ‘갑’의 건강을 상하게 하거나, 사망에 이르게 하였을 때"),
                this.createText13content("② 다음 각 호에 해당되는 경우에는 ‘갑’(또는 ‘병’)은 ‘을’에게 배상을 요구할 수 없다."),
                this.createText13content("   1. 자연사 또는 질환에 의하여 사망 하였을 때"),
                this.createText13content("   2.‘을’이 선량한 주의의무를 다했음에도 임의로 외출하여 상해를 당했거나 사망 하였을 때"),
                this.createText13content("   3. 천재지변으로 인하여 상해를 당했거나 사망 하였을 때"),
                this.createText13content("   4. ‘갑’의 고의 또는 중과실로 인하여 상해를 당했거나 사망하였을 때"),
                this.createText(""),
                this.createText13title("제15조(기타)"),
                this.createText13content("① 이 계약서에서 규정하지 않은 사항은 민법이나 사회상규에 따른다."),
                this.createText13content("② 부득이한 사정으로 소송이 제기될 경우 ‘갑’(또는 ‘병’) 또는 시설이 속한 소재지역의 관할법원으로 한다."),
                this.createText(""),
                this.createText15B("위와 같이 계약을 체결하고 본 계약체결을 증명하기 위하여 쌍방이 계약서를 작성 날인 후 각각 1부씩 보관키로 한다. "),
                this.createText(""),
                this.createRtoday(contract),
                this.createText15("상기 내용에 대한 충분한 설명을 ‘갑’과 ‘병’에게 제공하였습니다."),
                this.createText(""),
                this.createText(""),
                this.createText15R(`'을'   시설장   ${center_captain(center)}(인)`),
                this.createText(""),
                this.createText15("상기 내용을 읽고 그 내용에 동의합니다."),
                this.createText(""),
                this.createText(""),
                this.createText15R(`'갑'   이용자   ${name}(인)`),
                this.createText(""),
                this.createText(""),
                this.createText15R(`'병'   대리인(보호자)   ${pname}(인)`),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText(""),
                this.createText12("[별표 1]"),
                this.createText(""),
                this.createText15C("방문요양 급여 비용 및 본인부담 기준(2020.01.01)"),
                this.createText13content("  ○ 방문요양의 1회당 이용시간별 급여비용"),
                this.createText(""),
                table4,
                this.createText(""),
                this.createText13content("  ○ 등급별 재가급여 월 한도액(원)"),
                this.createText(""),
                table5,
                this.createText(""),
                this.createTextCR("※ 요양급여비용은 매년 장기요양위원회(위원장 : 보건복지부 차관)가 결정, 고시하는 장기요양급여비용 등에 관한 고시(보건복지부 고시)에 따름"),
                this.createTextCR("※ 공휴일 30% 할증, 야간(18∼22시) 20%할증, 심야(22∼06시) 30%할증"),
                this.createTextCR("※ 1일 최대3회 이용가능 (1회 급여 제공 후 재방문 시 2시간 간격 필요)"),
                this.createTextCR("※ 210분, 240분 이상 수가는 1일 1회 가능"),
                this.createTextCR("※ 월 4회에 한하여 270분∼480분 급여 제공 가능 (요양보호사 스케줄 확인 필요)"),
                this.createText(""),
                this.createText13content("  ○ 수급자 자격별 급여비용 본인일부부담 비율"),
                this.createText(""),
                table6,
                this.createText(""),
                this.createText12B("[별표 제5호서식]"),
                this.createRecAgreetop(),
                this.createRecAgreetitle("개인정보 제공 및 활용 동의서"),
                this.createRecAgreetext(""),
                this.createRecAgreetext(`   성 명  : ${name} (생  년  월  일  :${contract.user.birth})`),
                this.createRecAgreetext(`   주 소  : ${address}`),
                this.createRecAgreetext(""),
                this.createRecAgreetext(""),
                this.createRecAgreetextB("1. 수집대상정보"),
                this.createRecAgreetext("   ○ 장기요양급여 관련 정보"),
                this.createRecAgreetext("   ○ 이용자의 지역연계 관련 정보"),
                this.createRecAgreetext("   ○ 관련기관 정보제공 요청시 필요한 정보"),
                this.createRecAgreetext("   ○ 기타 목적사업 수행에 필요한 정보"),
                this.createRecAgreetext(""),
                this.createRecAgreetextB("2. 수집정보의 활용범위"),
                this.createRecAgreetext("   ○ 대상자 급여 관련에 필요한 정보의 활용"),
                this.createRecAgreetext("   ○ 제공기관 간의 서비스 연계와 관련사항에 관한 대상자 정보 제공"),
                this.createRecAgreetext("   ○ 관련기관 정보제공 요청시 제공"),
                this.createRecAgreetext("   ○ 장기요양계획, 욕구조사, 장기요양서비스 질 수준 향상 등에 활용"),
                this.createRecAgreetext(""),
                this.createRecAgreetextB("3. 개인정보 보유 및 이용기간 "),
                this.createRecAgreetext("   ○ 노인장기요양보험법 시행규칙에 의거하여 개인정보의 "),
                this.createRecAgreetext("   보유는 5년, 이용기간은 인정서 계약기간 내로 함"),
                this.createRecAgreetext(""),
                this.createRecAgreetextC("상기 본인은 개인정보를 제공하고 활용하는 것에 동의합니다."),
                this.createRecAgreetext(""),
                this.createRecAgreetextC(`${contract.date.year}년 ${contract.date.month}월 ${contract.date.day}일`),
                this.createRecAgreetext(""),
                this.createRecAgreetext(""),
                this.createRecAgreetext(""),
                this.createRecAgreetext(""),
                this.createRecAgreetextR(`이  용  자  :  ${name}(인)`),
                this.createRecAgreelast(),
            ],
        });

        function etc(etc: string, check: string): string{
            if (etc===check){
                return "■"
            }
            return "□"
        }  //수급자의 기타 확인

        function useday_check(useday: string, check: string): string{
            if (useday.includes(check)){
                return "■"
            }
            return "□"
        }  //수급자의 이용일 확인

        function usetime_check(time: number): string{
            if (time<12){
                return "오전"
            }
            return "오후"
        }  //수급자의 이용시간 확인

        function center_captain(center: string): string{
            if (center === "강남"){
                return "강미남"
            } else if(center === "논현"){
                return "정기범"
            } else if(center === "서초방문요양"){
                return "김명숙"
            }
            return " "
        }  //센터장 성명 출력

        function center_tel(center: string): string{
            if (center === "강남"){
                return "02-540-0655"
            } else if(center === "논현"){
                return "02-3443-2996"
            } else if(center === "서초방문요양"){
                return "02-541-3505"
            }
            return " "
        }  //센터 전화번호 출력

        function center_address(center: string): string{
            if (center === "강남"){
                return "서울시 강남구 강남대로 514  5층 501호"
            } else if(center === "논현"){
                return "서울시 강남구 강남대로 514  5층 502호"
            } else if(center === "서초방문요양"){
                return "서울시 서초구 신반포로 328, 328빌딩 303호"
            }
            return " "
        }  //센터 전화번호 출력

        return document;
    }  //수급자_방문요양 계획서_본문

    public createText(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 18,
                }),
            ],
        });
    }   //글자크기: 9

    public createRecTitle1(): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: "장기요양급여 이용 표준약관",
                    bold: true,
                    size: 40,
                })
            ],
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        })
    }   //수급자_방문요양계약서 제목

    public createRecTitle2(): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: "(방문요양)",
                    size: 34,
                })
            ],
            border: {
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        })
    }   //수급자_방문요양계약서 제목

    public createCaring(): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
                new TextRun({
                    text: "케어링",
                    size: 40,
                })
            ],
        })
    }   //수급자_방문요양계약서 제목밑 케어링 글자

    public createText11(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 22,
                    bold: true,
                })
            ],
        })
    }  //글자크기 11 굵기 bold

    public createText13(text1: string, text2: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text1,
                    size: 26,
                    bold: true,
                }),
                new TextRun({
                    text: text2,
                    size: 26,
                })
            ],
        })
    }  //글자크기 13 굵기 bold 와 normal 함께

    public createText13title(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 26,
                    bold: true,
                }),
            ],
        })
    }  //글자크기 13 굵기 bold

    public createText13content(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 26,
                }),
            ],
        })
    }  //글자크기 13 굵기 normal

    public createText12(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 24,
                }),
            ],
        })
    }  //글자크기 12 굵기 normal

    public createText12B(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 24,
                    bold: true,
                }),
            ],
        })
    }  //글자크기 12 굵기 bold

    public createText15B(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 30,
                    bold: true,
                }),
            ],
        })
    }   //글자크기 15 굵기 bold

    public createText15(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 30,
                }),
            ],
        })
    }   //글자크기 15 굵기 normal

    public createText15R(text: string): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
                new TextRun({
                    text: text,
                    size: 30,
                    bold: true,
                }),
            ],
        })
    }   //글자크기 15 굵기 bold 글자위치 오른쪽

    public createText15C(text: string): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: text,
                    size: 30,
                    bold: true,
                }),
            ],
        })
    }   //글자크기 15 굵기 bold 글자위치 가운데

    public createRtoday(contract: any): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${contract.date.year}년\t${contract.date.month}  월\t${contract.date.day}  일`,
                    size: 30,
                    bold: true,
                }),
            ],
        });
    }  //수급자_방문요양계약서 제2조 계약기간 작성

    public createTextCR(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 22,
                    bold: true,
                    color: "FF3333",
                }),
            ],
        });
    }  //글자크기 11 굵기 bold 글자색 빨간색

    public createRecAgreetop(): Paragraph {
        return new Paragraph({
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 위 border

    public createRecAgreetitle(text: string): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: text,
                    size: 36,
                    bold: true,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 제목

    public createRecAgreetext(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 26,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 본문

    public createRecAgreetextB(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 26,
                    bold: true,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 본문 굵기 bold

    public createRecAgreetextC(text: string): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: text,
                    size: 26,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 본문 글자위치 가운데

    public createRecAgreetextR(text: string): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
                new TextRun({
                    text: text,
                    size: 32,
                    bold: true,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 본문 글자위치 오른쪽

    public createRecAgreelast(): Paragraph {
        return new Paragraph({
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                },
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 20,
                }
            },
        });
    }  //수급자_방문요양계약서 개인정보동의서 아래 border

}  //docx파일 생성
