export default function validate(form){
    let errors = {}
    // if(!form.name) {
    //     errors.name = "name is required"
    // }
    if(form.name.length > 30){
        errors.name = "the name exceeds 30 characters"
    }
    if(form.name && !/^[A-Za-z\s]+$/.test(form.name)){
        errors.name = "name must not contain special characters or numbers";
     
     }
       //   height min }
    if(form.height_min && form.height_min < 15){
        errors.height_min ="the minimum height cannot be less than 15 centimeters"
    }
    // if(form.height_min && form.height_min.length > 3){
    //     errors.height_min = "should not be more than 3 characters";
    // }
    else if(/[a-zA-Z]/.test(form.height_min)){
        errors.height_min = "should not contain letters in heigth";
    }else if(parseInt(form.height_min) > parseInt(form.height_max)){
        errors.height_min = "height min cannot be greater than height max";
    }
   
    //   height_max
    if(form.height_max && form.height_max > 80){
         errors.height_max = "the maximum height cannot be greater than 80 centimeters"
    }

        else if(/[a-zA-Z]/.test(form.height_max)){
            errors.height_max = "should not contain letters in height";
        } 
        else if(parseInt(form.height_max) < parseInt(form.height_min)){
            errors.height_max = "height max cannot be less than height min";
        } 

        // weight_min
        if(form.weight_min && form.weight_min < 5){
            errors.weight_min ="The minimum weight cannot be less than 5 kilograms."
        }
        else if(/[a-zA-Z]/.test(form.weight_min)){
            errors.weight_min = "should not contain letters in weight";
        }else if(parseInt(form.weight_min) > parseInt(form.weight_max)){
            errors.weight_min = "weight min cannot be greater than weight  max";
        }

        // weight max
        if(form.weight_max && form.weight_max > 82){
             errors.weight_max = "the maximum weight cannot be more than 82 kilograms"
        }
            else if(/[a-zA-Z]/.test(form.weight_max)){
                errors.weight_max = "should not contain letters in weight";
            } 
            else if(parseInt(form.weight_max) < parseInt(form.weight_min)){
                errors.weight_max = "weight max cannot be less than weight min";
            } 

            //   life_min
            if(form.life_span_min && form.life_span_min < 10){
                errors.life_span_min ="minimum life expectancy is 10 years "
            }
            else if(/[a-zA-Z]/.test(form.life_span_min)){
                errors.life_span_min = "should not contain letters in life span max";
            }else if(parseInt(form.life_span_min) > parseInt(form.life_span_max)){
                errors.life_span_min = "life span min cannot be greater than life span  max";
            }

            // life_max
            if(form.life_span_max && form.life_span_max > 20){
                 errors.life_span_max = "maximum life expectancy is 20 years"
            }
                else if(/[a-zA-Z]/.test(form.life_span_max)){
                    errors.life_span_max = "should not contain letters in life max";
                } 
                else if(parseInt(form.life_span_max) < parseInt(form.life_span_min)){
                    errors.life_span_max = "life span max cannot be less than life span min";
                } 
    

    //  ulr 
        if (form.image && !/^(ftp|http|https):\/\/[^ "]+$/.test(form.image)) {
            errors.image = "the url entered is not valid"
        }
        if(form.image.length > 0 && !/.*(png|jpg|jpeg|gif)$/.test(form.image)){
            errors.image = "the url must direct a jpg, png, jpeg or gift image "
        }


    return errors
}
