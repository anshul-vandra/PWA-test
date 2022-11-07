import { useController } from "react-hook-form";

export const RenderTextInput = (prop) => {
    console.log('prop: ', prop);
    const {
        field,
        fieldState,
        formState
    } = useController({
        name: prop.name,
        control: prop.control,
        rules: {
            required: 'please enter name',
            
        },
        defaultValue: "",
    });
    console.log('fieldState: ', fieldState);
    console.log('formState: ', formState);

    return (
        <div>
            <div>
                <input {...field} />
            </div>
            <div >

            </div>
        </div>
    )
}
