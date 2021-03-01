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

/*
function check(month: string): string{
    if (month===""){
        return "□"
    }
    return "■"
} //기록지 신체활동지원 체크 함수
*/

function time(day: string, time: string): string{
    if (day===""){
        return ""
    }
    return time
}  //기록지 변화상태 기록 함수


function centernumber(center: string): string{
    if (center==="강남"){
        return "3-11680-00280"
    } else if (center==="논현"){
        return "3-11680-00276"
    } else if (center==="서초방문요양"){
        return "2-11650-00178"
    }
    return ""
}  //기록지 변화상태 기록 함수

function endtime(day:string, time: string, starttime: string): string{
    let hour: number = Number(starttime.slice(0, 2));
    let minute: number = Number(starttime.slice(3, 5));

    if (day==="" || time===""){
        return ""
    } else{
        let addtime = Number(time);

        if(addtime>=60){
            hour += Math.floor(addtime / 60);
            minute += (addtime % 60);
            if (minute>=60){
                hour += 1;
                minute -= 60;
            }
            if (hour<10 && minute==0){
                return `0${hour}:00`
            } else if(minute==0){
                return `${hour}:00`
            } else if(minute<10 && hour<10){
                return `0${hour}:0${minute}`
            } else if (hour<10){
                return `0${hour}:${minute}`
            } else if(minute<10){
                return `${hour}:0${minute}`
            }
            return `${hour}:${minute}`
        } else {
            minute += addtime;
            if (minute>=60){
                hour += 1;
                minute -= 60;
            }
            if (hour<10 && minute==0){
                return `0${hour}:00`
            } else if(minute==0){
                return `${hour}:00`
            } else if(minute<10 && hour<10){
                return `0${hour}:0${minute}`
            } else if (hour<10){
                return `0${hour}:${minute}`
            } else if(minute<10){
                return `${hour}:0${minute}`
            }
            return `${hour}:${minute}`
        }
    }
}  //기록지 총시간 기록 함수

export class docRecord {

    public createRecordpaper(name: string, birth: string, level: string, number: string, center: string, firstday: string, firststime: string, firsttime: string, secondday: string, secondstime: string, secondtime: string, thirdday: string, thirdstime: string, thirdtime: string, fourthday: string, fourthstime: string, fourthtime: string, fifthday: string, fifthstime: string, fifthtime: string, sixthday: string, sixthstime: string, sixthtime: string, seventhday: string, seventhstime: string, seventhtime: string): Document {
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
                                        text: `L-${number}`,
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
                                size: 18,
                                type: WidthType.PERCENTAGE,
                            },
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(firstday, firsttime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(secondday, secondtime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(thirdday, thirdtime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(fourthday, fourthtime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(fifthday, fifthtime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(sixthday, sixthtime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                text: `${time(seventhday, seventhtime)}분`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
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
                                text: `${time(firstday, firststime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${time(secondday, secondstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${time(thirdday, thirdstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${time(fourthday, fourthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${time(fifthday, fifthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${time(sixthday, sixthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${time(seventhday, seventhstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //시작시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
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
                                text: `${endtime(firstday, firsttime, firststime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(secondday, secondtime, secondstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(thirdday, thirdtime, thirdstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(fourthday, fourthtime, fourthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(fifthday, fifthtime, fifthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(sixthday, sixthtime, sixthstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `${endtime(seventhday, seventhtime, seventhstime)}`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //종료시간
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                            children: [new Paragraph(""),new Paragraph("")],
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
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                        new TableCell({
                            children: [new Paragraph("")]
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `개인위생(옷갈아입기, 세면,`,
                                        size: 16,
                                    }),
                                ]
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `구강청결, 몸단장 도움 등 )`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //개인위생
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `몸씻기 도움`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //몸씻기도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `식사 도움(영양관리 등)`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //식사도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `체위변경`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //체위변경
                new TableRow({
                    height: {height: 550, rule: HeightRule.EXACT},
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
                                children: [
                                    new TextRun({
                                        text: `이동 도움(보행,`,
                                        size: 16,
                                    }),
                                ]
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `보장구사용 등 도움)`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
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
                                children: [
                                    new TextRun({
                                        text: `화장실이용하기`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ]
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //화장실이용
                new TableRow({
                    height: {height: 700, rule: HeightRule.EXACT},
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `제공시간`,
                                        size: 20,
                                        bold: true,
                                    }),
                                ]
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
                        }),
                    ],
                }),  //일상생활 함께하기
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                        }),
                    ],
                }),  //인지행동변화 관리
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                text: `정서지원`,
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `의사소통 도움 등`,
                                        bold: true,
                                    }),
                                ]
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `말벗, 격려`,
                                        bold: true,
                                    }),
                                ]
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
                        }),
                    ],
                }),  //의사소통 도움
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `식사 준비, 청소 및`,
                                        size: 16,
                                    }),
                                ]
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `주변 정리 정돈, 세탁 등`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //식사 준비
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: `개인활동지원`,
                                        size: 16,
                                    }),
                                ]
                            }),new Paragraph({
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `(외출시 동행 등)`,
                                        size: 16,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
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
                                        size: 35,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //개인활동지원
                new TableRow({
                    height: {height: 700, rule: HeightRule.EXACT},
                    children: [
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
                                children: [
                                    new TextRun({
                                        text: `제공시간`,
                                        bold: true,
                                    }),
                                ]
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
                        }),
                    ],
                }),  //제공시간
                new TableRow({
                    height: {height: 400, rule: HeightRule.EXACT},
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                                children: [
                                    new TextRun({
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //신체기능
                new TableRow({
                    height: {height: 400, rule: HeightRule.EXACT},
                    children: [
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
                                children: [
                                    new TextRun({
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //식사기능
                new TableRow({
                    height: {height: 400, rule: HeightRule.EXACT},
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `상태`,
                            })],
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
                                children: [
                                    new TextRun({
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
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
                                        text: "①②③",
                                        size: 24,
                                    }),
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //인지기능
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
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
                        }),
                    ],
                }),  //대변실수
                new TableRow({
                    children: [
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
                        }),
                    ],
                }),  //소변실수기능
                new TableRow({
                    height: {height: 600, rule: HeightRule.EXACT},
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `특이`,
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
                                children: [
                                    new TextRun({
                                        text: `/`,
                                        size: 40,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            columnSpan: 8,
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                    ],
                }),  //특이사항
                new TableRow({
                    height: {height: 600, rule: HeightRule.EXACT},
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                alignment: AlignmentType.CENTER,
                                text: `사항`,
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
                                children: [
                                    new TextRun({
                                        text: `/`,
                                        size: 40,
                                    })
                                ],
                            })],
                            verticalAlign: VerticalAlign.CENTER,
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                            columnSpan: 8,
                            verticalAlign: VerticalAlign.CENTER,
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
                            })]
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
                        }),
                    ],
                }),  //요양요원서명
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("")],
                            borders: {
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
                        }),
                    ],
                }),  //수급자서명
            ],
        });  //기록지 첫번째 테이블
        document.addSection({
            margins: {
                top: -1,
                bottom: -1,
                right: 500,
                left: 500,
            },
            children: [
                this.createText(""),
                this.createText(""),
                this.createText8("■ 노인장기요양보험법 시행규칙   [별지 제12호서식]   <개정 2019. 6. 12.>"),
                this.createText16B("장기요양급여 제공기록지(방문요양)"),
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
