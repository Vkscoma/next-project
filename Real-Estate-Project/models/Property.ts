import { Schema, model, models } from 'mongoose';

const PropertySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User' // reference to User model
    },
    name: {
        type: String,
        required: [true, 'Title is required'],
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    location: {
        street: String,
        city: String,
        state: String,
        zip: String,
    },
    beds: {
        type: Number,
        required: [true, 'Number of beds is required'],
    },
    baths: {
        type: Number,
        required: [true, 'Number of baths is required'],
    },
    square_feet: {
        type: Number,
        required: [true, 'Square feet is required'],
    },
    amenities: [
        {
            type: String,
        },
    ],
    rates: {
        weekly: {
            type: Number,
            required: false,
        },
        monthly: {
            type: Number,
            required: false,
        },
    },
    seller_info: {
        name: String,
        phone: String,
        email: String,
    },
    images: [
        {
            type: String,
        },
    ],
    is_featured: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Property = models.Property || model('Property', PropertySchema);
export default Property;