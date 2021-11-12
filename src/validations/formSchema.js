import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, "name must be at least 2 characters"),
    // .required("Must provide name."),
    size: yup
        .string()
        .oneOf(["Small", "Medium", "Large", "XL"], "Please pick a size."),
    pepperoni: yup
        .boolean(),
    bacon: yup
        .boolean(),
    sausage: yup
        .boolean(),
    chicken: yup
        .boolean(),
    special: yup
        .string()
        .trim()
})


export default formSchema;
















































