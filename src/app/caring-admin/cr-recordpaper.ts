import {
    AlignmentType,
    BorderStyle,
    Document,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    VerticalAlign,
    WidthType,
} from "docx";

function check(month: string): string{
    if (month===""){
        return "□"
    }
    return "■"
} //기록지 신체활동지원 체크 함수

function keep(month: string): string{
    if (month===""){
        return ""
    }
    return "2.유지"
}  //기록지 변화상태 기록 함수

function centernumber(center: string): string{
    if (center==="강남"){
        return "3-11680-00280"
    } else if (center==="논현"){
        return "3-11680-00276"
    } else if (center==="서초방문요양"){
        return ""
    }
    return ""
}  //기록지 변화상태 기록 함수

function endtime(time: string, starttime: string): string{
    let hour: number = Number(starttime.slice(0, 2));
    let min: number = Number(starttime.slice(3, 5));

    if (time===""){
        return ""
    } else{
        let addtime = Number(time);

        if(addtime>=60){
            hour += Math.floor(addtime / 60);
            min += (addtime % 60);
            if (min>=60){
                hour += 1;
                min -= 60;
            }
            return `${hour}:${min}`
        } else {
            min += addtime;
            if (min>=60){
                hour += 1;
                min -= 60;
            }
            return `${hour}:${min}`
        }
    }
}  //기록지 총시간 기록 함수

export class docRecord {

    public createRecordpaper(name: string, birth: string, level: string, number: string, center: string, phone: string, firstday: string, firststime: string, firsttime: string, secondday: string, secondstime: string, secondtime: string, thirdday: string, thirdstime: string, thirdtime: string, fourthday: string, fourthstime: string, fourthtime: string, fifthday: string, fifthstime: string, fifthtime: string, sixthday: string, sixthstime: string, sixthtime: string, seventhday: string, seventhstime: string, seventhtime: string): Document {
        const document = new Document();
        const record = {
            user: {
                birth: birth.replace(/-/g, "."),
                year: firstday.slice(0, 4),
            },
            first: {
                month: firstday.slice(5, 7),
                day: firstday.slice(8, 10),
            },
            second: {
                month: secondday.slice(5, 7),
                day: secondday.slice(8, 10),
            },
            third: {
                month: thirdday.slice(5, 7),
                day: thirdday.slice(8, 10),
            },
            fourth: {
                month: fourthday.slice(5, 7),
                day: fourthday.slice(8, 10),
            },
            fifth: {
                month: fifthday.slice(5, 7),
                day: fifthday.slice(8, 10),
            },
            sixth: {
                month: sixthday.slice(5, 7),
                day: sixthday.slice(8, 10),
            },
            seventh: {
                month: seventhday.slice(5, 7),
                day: seventhday.slice(8, 10),
            },

        };  //기록지에서 사용되는 변수
        const Rtable1 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "수급자 성명",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${name}`,
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            columnSpan: 2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "생년월일",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${record.user.birth}`,
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            columnSpan: 3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "장기요양등급",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${level}`,
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            columnSpan: 2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "장기요양인정번호",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${number}`,
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            columnSpan: 3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "장기요양기관명",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `케어링  ${center}센터`,
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            columnSpan: 5,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 50,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children:[
                                    new TextRun({
                                        text: "장기요양기관기호",
                                        size: 22,
                                    })
                                ],
                            }), new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children:[
                                    new TextRun({
                                        text: `${centernumber(center)}`,
                                        size: 22,
                                        bold: true,
                                    })
                                ],
                            })],
                            columnSpan: 5,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 50,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                    ],
                }),
            ],
        });  //기록지 첫번째 테이블
        const Rtable2 = new Table({
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `(${record.user.year})년 월/일`,
                            })],
                            columnSpan: 2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 36,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.first.month}/${record.first.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.second.month}/${record.second.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.third.month}/${record.third.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.fourth.month}/${record.fourth.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.fifth.month}/${record.fifth.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.sixth.month}/${record.sixth.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${record.seventh.month}/${record.seventh.day}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //()년 월/일
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "일정",
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `제공`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `총시간`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 34,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${firsttime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${secondtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${thirdtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${fourthtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${fifthtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${sixthtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${seventhtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //총시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "관리",
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `시간`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `시작시간`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${firststime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${secondstime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${thirdstime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${fourthstime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${fifthstime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${sixthstime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${seventhstime}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //시작시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `종료시간`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(firsttime, firststime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(secondtime, secondstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(thirdtime, thirdstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(fourthtime, fourthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(fifthtime, fifthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(sixthtime, sixthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(seventhtime, seventhstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //종료시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `개인위생(옷갈아입기, 세면,`,
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `구강청결, 몸단장 도움 등 )`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.first.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.second.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.third.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.fourth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.fifth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.sixth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.seventh.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //개인위생
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `몸씻기 도움`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //몸씻기도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "신체"
                            })],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `식사 도움(영양관리 등)`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.first.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.second.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.third.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.fourth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.fifth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.sixth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.seventh.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //식사도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "활동"
                            })],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `체위변경`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.first.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.second.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.third.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.fourth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.fifth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.sixth.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${check(record.seventh.month)}`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //체위변경
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `서`,
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `비`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "지원"
                            })],
                            verticalAlign: VerticalAlign.TOP,
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `이동 도움(보행,`,
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `보장구사용 등 도움)`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //이동도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `스`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `화장실이용하기`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //화장실이용
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `제공시간`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${firsttime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${secondtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${thirdtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${fourthtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${fifthtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${sixthtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${seventhtime}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //제공시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `제`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `인지활동`,
                            })],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `인지자극활동`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //인지자극활동
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `공`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `지원`,
                            })],
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `일상생활 함께하기`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //일상생활 함께하기
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `인지관리지원`,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `인지행동변화 관리 등`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //인지행동변화 관리
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `정서지원`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `의사소통 도움 등`,
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `말벗, 격려`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //의사소통 도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `가사 및`,
                            })],
                            verticalAlign: VerticalAlign.BOTTOM,
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `식사 준비, 청소 및`,
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `주변 정리 정돈, 세탁 등`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //식사 준비
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `일상생활지원`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `개인활동지원(외출시 동행 등)`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `□`,
                                        size: 40,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //개인활동지원
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `제공시간`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //제공시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `신체기능`,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `1.호전2.유지3.악화`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.first.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.second.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.third.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.fourth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.fifth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.sixth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.seventh.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //신체기능
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `변화`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `식사기능`,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `1.호전2.유지3.악화`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.first.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.second.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.third.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.fourth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.fifth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.sixth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.seventh.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //식사기능
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `상태`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `인지기능`,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `1.호전2.유지3.악화`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.first.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.second.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text:`${keep(record.third.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.fourth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.fifth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.sixth.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${keep(record.seventh.month)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //인지기능
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `배변`,
                            })],
                            borders: {
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `대변 실수 횟수`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //대변실수
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `변화`,
                            })],
                            borders: {
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `소변 실수 횟수`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `회`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //소변실수기능
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `특이`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `/`,
                                        size: 30,
                                    })
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            columnSpan: 8,
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //특이사항
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `사항`,
                            })],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `/`,
                                        size: 30,
                                    })
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            columnSpan: 8,
                            verticalAlign: VerticalAlign.CENTER,
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //특이사항
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: "서명",
                            })],
                            verticalAlign: VerticalAlign.BOTTOM,
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                }
                            },
                            columnSpan: 2,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "장기요양요원 성명"
                                    }),
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "(서명)"
                                    }),
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //요양요원서명
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                left: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                                top: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                            columnSpan: 2,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "수급자 또는 보호자 성명"
                                    }),
                                ],
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "(서명)"
                                    }),
                                ],
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
                                right: {
                                    style: BorderStyle.NONE,
                                    size: 10,
                                    color: "000000",
                                },
                            },
                        }),
                    ],
                }),  //수급자서명
            ],
        });  //기록지 첫번째 테이블
        document.addSection({
            margins: {
                top: -1,
                bottom: 0,
            },
            children: [
                this.createText8("■ 노인장기요양보험법 시행규칙   [별지 제12호서식]   <개정 2019. 6. 12.>"),
                this.createText16B("장기요양급여 제공기록지(방문요양)"),
                this.createText(""),
                Rtable1,
                this.createText3("-"),
                Rtable2,
            ],
        });
        return document;
    }   //기록지_본문

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

    public createText3(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 6,
                }),
            ],
        });
    }   //글자크기: 3

    public createText8(text: string): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 16,
                }),
            ],
        })
    }  //글자크기 8 굵기 normal

    public createText16B(text: string): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: text,
                    size: 32,
                    bold: true,
                }),
            ],
        })
    }  //글자크기 16 굵기 bold

}  //docx파일 생성
