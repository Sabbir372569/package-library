

//props two way conditional ren dering
// export default function Rendering({ step, isCom }) {
//     return (
//         <li>Task:{step}</li>
//     )
// }

export default function Rendering({step,isCom}) {
    if(isCom === true){
        return <li>Go ahead:{step}.</li>
    }
    else {
        return <li>Learn more:{step}.</li>
        }
    }