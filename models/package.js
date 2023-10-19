const mongoose = require('mongoose')
const { Schema } = mongoose


const packageSchema = new Schema({
  transaction_id: {
    type: String,
    required: true,
    unique: true
  },
  customer_name: {
    type: String,
    required: true
  },
  customer_code: {
    type: String,
    required: true,
    unique: true
  },
  transaction_amount: String,
  transaction_discount: String,
  transaction_additional_field: String,
  transaction_payment_type: String,
  transaction_state: String,
  transaction_code: {
    type: String,
    required: true,
    unique: true
  },
  transaction_order: String,
  location_id: String,
  organization_id: String,
  transaction_payment_type_name: String,
  transaction_cash_change: Number,
  transaction_cash_amount: Number,
  customer_attribute: Object,
  koli_data: Array,
  customer_attribute: {
    Nama_Sales: String,
    TOP: String,
    Jenis_Pelanggan: String,
  },
  connote: {
    connote_id: String,
    connote_number: Number,
    connote_service: String,
    connote_service_price: Number,
    connote_amount: Number,
    connote_code: String,
    connote_booking_code: String,
    connote_order: Number,
    connote_state: String,
    connote_state_id: Number,
    zone_code_from: String,
    zone_code_to: String,
    surcharge_amount: Number,
    transaction_id: String,
    actual_weight: Number,
    volume_weight: Number,
    chargeable_weight: Number,
    created_at: Date,
    updated_at: Date,
    organization_id: Number,
    location_id: String,
    connote_total_package: String,
    connote_surcharge_amount: String,
    connote_sla_day: String,
    location_name: String,
    location_type: String,
    source_tariff_db: String,
    id_source_tariff: String,
    pod: String,
    history: Array,
  },
  connote_id: String,
  origin_data: {
    customer_name: String,
    customer_address: String,
    customer_email: String,
    customer_phone: String,
    customer_address_detail: String,
    customer_zip_code: String,
    zone_code: String,
    organization_id: Number,
    location_id: String,
  },
  destination_data: {
    customer_name: String,
    customer_address: String,
    customer_email: String,
    customer_phone: String,
    customer_address_detail: String,
    customer_zip_code: String,
    zone_code: String,
    organization_id: Number,
    location_id: String,
  },
  koli_data: [
    {
      koli_length: Number,
      awb_url: String,
      created_at: Date,
      koli_chargeable_weight: Number,
      koli_width: Number,
      koli_surcharge: Array,
      koli_height: Number,
      updated_at: Date,
      koli_description: String,
      koli_formula_id: String,
      connote_id: String,
      koli_volume: Number,
      koli_weight: Number,
      koli_id: String,
      koli_custom_field: {
        awb_sicepat: String,
        harga_barang: String,
      },
      koli_code: String,
    },
],
  custom_field: {
    catatan_tambahan: String,
  },
  currentLocation: Object
})

    
module.exports = mongoose.model('Package', packageSchema)