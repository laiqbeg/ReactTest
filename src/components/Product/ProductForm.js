import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../redux/actions/productActions';
import Select from 'react-select';
import InputField from '../Controls/InputField.js';
import SelectField from '../Controls/SelectField.js';

const ProductForm = ({ product }) => {
    const { register, handleSubmit, formState: { errors }, control, reset } = useForm({ defaultValues: product || {} });
    const dispatch = useDispatch();

    const brandOptions = [
        { value: 'brand1', label: 'Brand 1' },
        { value: 'brand2', label: 'Brand 2' },
        { value: 'brand3', label: 'Brand 3' },
    ];

    const onSubmit = (data) => {
        if (product) {
            dispatch(updateProduct(data));
        } else {
            dispatch(addProduct(data));
        }
        reset({
            name: '',
            description: '',
            basePrice: '',
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField
                    label="Name"
                    type="text"
                    id="name"
                    register={register}
                    validation={{ required: true }}
                    errors={errors}
                />
                <InputField
                    label="Description"
                    type="textarea"
                    id="description"
                    register={register}
                    validation={{ required: true }}
                    errors={errors}
                />
                <InputField
                    label="Price"
                    type="number"
                    id="basePrice"
                    register={register}
                    validation={{ required: true }}
                    errors={errors}
                />



                <InputField
                    label="Email"
                    type="email"
                    id="email"
                    register={register}
                    validation={{ required: true }}
                    pattern={/\S+@\S+\.\S+/}
                    errors={errors}
                />
                <InputField
                    label="Phone Number"
                    type="text"
                    id="phoneNumber"
                    register={register}
                    validation={{ required: true }}
                    pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
                    errors={errors}
                />



                <div className="mb-3">
                    {/* <label htmlFor="brand" className="form-label">Brand</label>
                    <Controller
                        name="brand"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={brandOptions}
                                classNamePrefix="react-select"
                                placeholder="Select brands..."
                            />
                        )}
                    />
                    {errors.brand && <span>This field is required</span>} */}
                    <SelectField
                        name="brand"
                        control={control}
                        options={brandOptions}
                        rules={{ required: true }}
                        placeholder="Select brands..."
                        errors={errors}
                        isMulti={false}
                    />
                </div>
                <button type="submit" className="btn btn-primary">{product ? 'Update' : 'Add'} Product</button>
            </form>
        </div>
    );
};

export default ProductForm;
