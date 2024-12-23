import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [K in string]?: JsonValue;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Address {
  address_id: Generated<number>;
  address_type: string | null;
  country: string | null;
  district: string | null;
  division: string | null;
  post_office: string | null;
  postal_code: string | null;
  thana: string | null;
  union_name: string | null;
  upzilla: string | null;
  village: string | null;
}

export interface AuthSession {
  create_at: Timestamp | null;
  expires_at: Timestamp | null;
  is_active: boolean | null;
  session_id: string;
  user_id: string | null;
}

export interface Images {
  created_at: Generated<Timestamp | null>;
  image_filename: string;
  image_id: Generated<number>;
  product_id: number;
}

export interface Product {
  main_image_id: number | null;
  product_category_id: number | null;
  product_description: Json | null;
  product_id: Generated<number>;
  product_name: string | null;
  product_new_price: number | null;
  product_old_price: number | null;
  product_term_and_condition: Json | null;
}

export interface ProductCategory {
  category_name: string | null;
  parent_category_id: number | null;
  product_category_description: string | null;
  product_category_id: Generated<number>;
  product_category_image_url: string | null;
}

export interface ProductItem {
  created_at: Timestamp | null;
  is_active: boolean | null;
  product_id: number | null;
  product_image_id: number | null;
  product_item_id: Generated<number>;
  product_item_price: number | null;
  qty_in_stock: number | null;
  sku: string | null;
  updated_at: Timestamp | null;
}

export interface ProductVariation {
  category_id: number | null;
  product_variation_id: Generated<number>;
  variation_name: string | null;//size ,color ,brand
}

export interface Role {
  role_id: Generated<number>;
  role_type: string | null;
}

export interface UserAddress {
  address_id: number;
  is_default: boolean | null;
  user_id: string;
}

export interface Users {
  created_at: Timestamp | null;
  role_id: number | null;
  updated_at: Timestamp | null;
  user_email: string | null;
  user_id: string;
  user_image_url: string | null;
  user_name: string | null;
  user_password: string | null;
  user_phone: string | null;
}

export interface VariationOptions {
  product_variation_id: number | null;
  value: string | null;
  variation_option_id: Generated<number>;
}

export interface DB {
  address: Address;
  auth_session: AuthSession;
  images: Images;
  product: Product;
  product_category: ProductCategory;
  product_item: ProductItem;
  product_variation: ProductVariation;
  role: Role;
  user_address: UserAddress;
  users: Users;
  variation_options: VariationOptions;
}
