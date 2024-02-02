import ComputeForm from "./ComputeForm"
import ThemeSwitch from "./ThemeSwitch"

export default function ComputeAge(){
    return (
        <>
            <div>
                <div className="flex justify-center mb-5">
                    <h2 className="text-stone-200 font-semibold text-3xl">Find Your Age</h2> 
                </div>           
                <ComputeForm />
                <ThemeSwitch />
            </div>
        </>
    )
}