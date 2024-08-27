import { DetailsData, EventsData } from "../../interfaces/dashboardInterface/dashboardInterfaces";
import images from "../imagesImport";

export const programCustomData: DetailsData[]=[
    {id:1, bgImg:images.bsProgramImg},
    {id:2, bgImg:images.msPHDProgram}
]


export const shortCourseCustomData: DetailsData[]=[
    {id:1, bgImg:images.courseImg},
    {id:2, bgImg:images.coachingImg},
    {id:3, bgImg:images.interviewPrepImg}
]

export const stayCustomData: DetailsData[]=[
    {id:1, bgImg:images.hostelImg},
    {id:2, bgImg:images.roomSharingImg},
]
export const ourPartnerCustomData: DetailsData[]=[
    {id:1, bgImg:images.institutionImg},
    {id:2, bgImg:images.jobsInternshipImg},
    {id:3, bgImg:images.startupGrantImg},
]
export const eventsData: EventsData[]=[
    {id:1, bgImg:images.eventOneImg, description:'In March 2023, CISCO BRAINS Institute Peshawar, in collaboration with Admissionsuc, held an event with the Chairman of HEC as the chief guest, along with the CISCO Country Director and the Rector of BRAINS. ',readMore:'readmore'},
    {id:2, bgImg:images.eventTwoImg, description:'In 2018-19, AUSC sent 70 students in the first round and 100 students in the second round on scholarships for MS programs to Sichuan University of Science and Technology in China.',readMore:'readmore'},
    {id:3, bgImg:images.eventThreeImg, description:'In May 2024, the Department of Management Sciences at COMSATS University Islamabad, Attock Campus, hosted an event for startups. ',readMore:'readmore'},

]
