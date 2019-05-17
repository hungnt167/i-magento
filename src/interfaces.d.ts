/**
 * Interface LinkInterface Represents link with collected data and initialized vector for decryption.
 */
export interface AnalyticsDataLinkInterface {
    url: string;
    initialization_vector: string;
}
/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\BundleOptionInterface
 */
export interface BundleDataBundleOptionExtensionInterface {
}
/**
 * Interface BundleOptionInterface
 */
export interface BundleDataBundleOptionInterface {
    /**
     * Bundle option id.
     */
    option_id: number;
    /**
     * Bundle option quantity.
     */
    option_qty: number;
    /**
     * Bundle option selection ids.
     */
    option_selections: number[];
    extension_attributes?: BundleDataBundleOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\LinkInterface
 */
export interface BundleDataLinkExtensionInterface {
}
/**
 * Interface LinkInterface
 */
export interface BundleDataLinkInterface {
    /**
     * The identifier
     */
    id?: string;
    /**
     * Linked product sku
     */
    sku?: string;
    /**
     * Option id
     */
    option_id?: number;
    /**
     * Qty
     */
    qty?: number;
    /**
     * Position
     */
    position?: number;
    /**
     * Is default
     */
    is_default: boolean;
    /**
     * Price
     */
    price: number;
    /**
     * Price type
     */
    price_type: number;
    /**
     * Whether quantity could be changed
     */
    can_change_quantity?: number;
    extension_attributes?: BundleDataLinkExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionInterface
 */
export interface BundleDataOptionExtensionInterface {
}
/**
 * Interface OptionInterface
 */
export interface BundleDataOptionInterface {
    /**
     * Option id
     */
    option_id?: number;
    /**
     * Option title
     */
    title?: string;
    /**
     * Is required option
     */
    required?: boolean;
    /**
     * Input type
     */
    type?: string;
    /**
     * Option position
     */
    position?: number;
    /**
     * Product sku
     */
    sku?: string;
    /**
     * Product links
     */
    product_links?: BundleDataLinkInterface[];
    extension_attributes?: BundleDataOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Bundle\Api\Data\OptionTypeInterface
 */
export interface BundleDataOptionTypeExtensionInterface {
}
/**
 * Interface OptionTypeInterface
 */
export interface BundleDataOptionTypeInterface {
    /**
     * Type label
     */
    label: string;
    /**
     * Type code
     */
    code: string;
    extension_attributes?: BundleDataOptionTypeExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\BasePriceInterface
 */
export interface CatalogDataBasePriceExtensionInterface {
}
/**
 * Price interface.
 */
export interface CatalogDataBasePriceInterface {
    /**
     * Price.
     */
    price: number;
    /**
     * Store id.
     */
    store_id: number;
    /**
     * SKU.
     */
    sku: string;
    extension_attributes?: CatalogDataBasePriceExtensionInterface;
}
/**
 * 
 */
export interface CatalogDataCategoryAttributeInterface {
    /**
     * WYSIWYG flag
     */
    is_wysiwyg_enabled?: boolean;
    /**
     * The HTML tags are allowed on the frontend
     */
    is_html_allowed_on_front?: boolean;
    /**
     * It is used for sorting in product listing
     */
    used_for_sort_by?: boolean;
    /**
     * It used in layered navigation
     */
    is_filterable?: boolean;
    /**
     * It is used in search results layered navigation
     */
    is_filterable_in_search?: boolean;
    /**
     * It is used in catalog product grid
     */
    is_used_in_grid?: boolean;
    /**
     * It is visible in catalog product grid
     */
    is_visible_in_grid?: boolean;
    /**
     * It is filterable in catalog product grid
     */
    is_filterable_in_grid?: boolean;
    /**
     * Position
     */
    position?: number;
    /**
     * Apply to value for the element
     */
    apply_to?: string[];
    /**
     * The attribute can be used in Quick Search
     */
    is_searchable?: string;
    /**
     * The attribute can be used in Advanced Search
     */
    is_visible_in_advanced_search?: string;
    /**
     * The attribute can be compared on the frontend
     */
    is_comparable?: string;
    /**
     * The attribute can be used for promo rules
     */
    is_used_for_promo_rules?: string;
    /**
     * The attribute is visible on the frontend
     */
    is_visible_on_front?: string;
    /**
     * The attribute can be used in product listing
     */
    used_in_product_listing?: string;
    /**
     * Attribute is visible on frontend.
     */
    is_visible?: boolean;
    /**
     * Attribute scope
     */
    scope?: string;
    extension_attributes?: CatalogDataEavAttributeExtensionInterface;
    /**
     * Id of the attribute.
     */
    attribute_id?: number;
    /**
     * Code of the attribute.
     */
    attribute_code: string;
    /**
     * HTML for input element.
     */
    frontend_input: string;
    /**
     * Entity type id
     */
    entity_type_id: string;
    /**
     * Attribute is required.
     */
    is_required: boolean;
    /**
     * Options of the attribute (key => value pairs for select)
     */
    options?: EavDataAttributeOptionInterface[];
    /**
     * Current attribute has been defined by a user.
     */
    is_user_defined?: boolean;
    /**
     * Frontend label for default store
     */
    default_frontend_label?: string;
    /**
     * Frontend label for each store
     */
    frontend_labels: EavDataAttributeFrontendLabelInterface[];
    /**
     * The note attribute for the element.
     */
    note?: string;
    /**
     * Backend type.
     */
    backend_type?: string;
    /**
     * Backend model
     */
    backend_model?: string;
    /**
     * Source model
     */
    source_model?: string;
    /**
     * Default value for the element.
     */
    default_value?: string;
    /**
     * This is a unique attribute
     */
    is_unique?: string;
    /**
     * Frontend class of attribute
     */
    frontend_class?: string;
    /**
     * Validation rules.
     */
    validation_rules?: EavDataAttributeValidationRuleInterface[];
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * 
 */
export interface CatalogDataCategoryAttributeSearchResultsInterface {
    /**
     * Attributes list.
     */
    items: CatalogDataCategoryAttributeInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryInterface
 */
export interface CatalogDataCategoryExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataCategoryInterface {
    id?: number;
    /**
     * Parent category ID
     */
    parent_id?: number;
    /**
     * Category name
     */
    name: string;
    /**
     * Whether category is active
     */
    is_active?: boolean;
    /**
     * Category position
     */
    position?: number;
    /**
     * Category level
     */
    level?: number;
    children?: string;
    created_at?: string;
    updated_at?: string;
    path?: string;
    available_sort_by?: string[];
    include_in_menu?: boolean;
    extension_attributes?: CatalogDataCategoryExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryLinkInterface
 */
export interface CatalogDataCategoryLinkExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataCategoryLinkInterface {
    position?: number;
    /**
     * Category id
     */
    category_id: string;
    extension_attributes?: CatalogDataCategoryLinkExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CategoryProductLinkInterface
 */
export interface CatalogDataCategoryProductLinkExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataCategoryProductLinkInterface {
    sku?: string;
    position?: number;
    /**
     * Category id
     */
    category_id: string;
    extension_attributes?: CatalogDataCategoryProductLinkExtensionInterface;
}
/**
 * 
 */
export interface CatalogDataCategorySearchResultsInterface {
    /**
     * Categories
     */
    items: CatalogDataCategoryInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * 
 */
export interface CatalogDataCategoryTreeInterface {
    id?: number;
    /**
     * Parent category ID
     */
    parent_id: number;
    /**
     * Category name
     */
    name: string;
    /**
     * Whether category is active
     */
    is_active: boolean;
    /**
     * Category position
     */
    position: number;
    /**
     * Category level
     */
    level: number;
    /**
     * Product count
     */
    product_count: number;
    children_data: CatalogDataCategoryTreeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CostInterface
 */
export interface CatalogDataCostExtensionInterface {
}
/**
 * Cost interface.
 */
export interface CatalogDataCostInterface {
    /**
     * Cost value.
     */
    cost: number;
    /**
     * Store id.
     */
    store_id: number;
    /**
     * SKU.
     */
    sku: string;
    extension_attributes?: CatalogDataCostExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\CustomOptionInterface
 */
export interface CatalogDataCustomOptionExtensionInterface {
    file_info?: FrameworkDataImageContentInterface;
}
/**
 * Interface CustomOptionInterface
 */
export interface CatalogDataCustomOptionInterface {
    /**
     * Option id
     */
    option_id: string;
    /**
     * Option value
     */
    option_value: string;
    extension_attributes?: CatalogDataCustomOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\EavAttributeInterface
 */
export interface CatalogDataEavAttributeExtensionInterface {
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\PriceUpdateResultInterface
 */
export interface CatalogDataPriceUpdateResultExtensionInterface {
}
/**
 * Interface returned in case of incorrect price passed to efficient price API.
 */
export interface CatalogDataPriceUpdateResultInterface {
    /**
     * Error message, that contains description of error occurred during price update.
     */
    message: string;
    /**
     * Parameters, that could be displayed in error message placeholders.
     */
    parameters: string[];
    extension_attributes?: CatalogDataPriceUpdateResultExtensionInterface;
}
/**
 * 
 */
export interface CatalogDataProductAttributeInterface {
    /**
     * WYSIWYG flag
     */
    is_wysiwyg_enabled?: boolean;
    /**
     * The HTML tags are allowed on the frontend
     */
    is_html_allowed_on_front?: boolean;
    /**
     * It is used for sorting in product listing
     */
    used_for_sort_by?: boolean;
    /**
     * It used in layered navigation
     */
    is_filterable?: boolean;
    /**
     * It is used in search results layered navigation
     */
    is_filterable_in_search?: boolean;
    /**
     * It is used in catalog product grid
     */
    is_used_in_grid?: boolean;
    /**
     * It is visible in catalog product grid
     */
    is_visible_in_grid?: boolean;
    /**
     * It is filterable in catalog product grid
     */
    is_filterable_in_grid?: boolean;
    /**
     * Position
     */
    position?: number;
    /**
     * Apply to value for the element
     */
    apply_to?: string[];
    /**
     * The attribute can be used in Quick Search
     */
    is_searchable?: string;
    /**
     * The attribute can be used in Advanced Search
     */
    is_visible_in_advanced_search?: string;
    /**
     * The attribute can be compared on the frontend
     */
    is_comparable?: string;
    /**
     * The attribute can be used for promo rules
     */
    is_used_for_promo_rules?: string;
    /**
     * The attribute is visible on the frontend
     */
    is_visible_on_front?: string;
    /**
     * The attribute can be used in product listing
     */
    used_in_product_listing?: string;
    /**
     * Attribute is visible on frontend.
     */
    is_visible?: boolean;
    /**
     * Attribute scope
     */
    scope?: string;
    extension_attributes?: CatalogDataEavAttributeExtensionInterface;
    /**
     * Id of the attribute.
     */
    attribute_id?: number;
    /**
     * Code of the attribute.
     */
    attribute_code: string;
    /**
     * HTML for input element.
     */
    frontend_input: string;
    /**
     * Entity type id
     */
    entity_type_id: string;
    /**
     * Attribute is required.
     */
    is_required: boolean;
    /**
     * Options of the attribute (key => value pairs for select)
     */
    options?: EavDataAttributeOptionInterface[];
    /**
     * Current attribute has been defined by a user.
     */
    is_user_defined?: boolean;
    /**
     * Frontend label for default store
     */
    default_frontend_label?: string;
    /**
     * Frontend label for each store
     */
    frontend_labels: EavDataAttributeFrontendLabelInterface[];
    /**
     * The note attribute for the element.
     */
    note?: string;
    /**
     * Backend type.
     */
    backend_type?: string;
    /**
     * Backend model
     */
    backend_model?: string;
    /**
     * Source model
     */
    source_model?: string;
    /**
     * Default value for the element.
     */
    default_value?: string;
    /**
     * This is a unique attribute
     */
    is_unique?: string;
    /**
     * Frontend class of attribute
     */
    frontend_class?: string;
    /**
     * Validation rules.
     */
    validation_rules?: EavDataAttributeValidationRuleInterface[];
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeMediaGalleryEntryInterface
 */
export interface CatalogDataProductAttributeMediaGalleryEntryExtensionInterface {
    video_content?: FrameworkDataVideoContentInterface;
}
/**
 * 
 */
export interface CatalogDataProductAttributeMediaGalleryEntryInterface {
    /**
     * Gallery entry ID
     */
    id?: number;
    /**
     * Media type
     */
    media_type: string;
    /**
     * Gallery entry alternative text
     */
    label: string;
    /**
     * Gallery entry position (sort order)
     */
    position: number;
    /**
     * If gallery entry is hidden from product page
     */
    disabled: boolean;
    /**
     * Gallery entry image types (thumbnail, image, small_image etc)
     */
    types: string[];
    /**
     * File path
     */
    file?: string;
    content?: FrameworkDataImageContentInterface;
    extension_attributes?: CatalogDataProductAttributeMediaGalleryEntryExtensionInterface;
}
/**
 * 
 */
export interface CatalogDataProductAttributeSearchResultsInterface {
    /**
     * Attributes list.
     */
    items: CatalogDataProductAttributeInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductAttributeTypeInterface
 */
export interface CatalogDataProductAttributeTypeExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataProductAttributeTypeInterface {
    /**
     * Value
     */
    value: string;
    /**
     * Type label
     */
    label: string;
    extension_attributes?: CatalogDataProductAttributeTypeExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionInterface
 */
export interface CatalogDataProductCustomOptionExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataProductCustomOptionInterface {
    /**
     * Product SKU
     */
    product_sku: string;
    /**
     * Option id
     */
    option_id?: number;
    /**
     * Option title
     */
    title: string;
    /**
     * Option type
     */
    type: string;
    /**
     * Sort order
     */
    sort_order: number;
    /**
     * Is require
     */
    is_require: boolean;
    /**
     * Price
     */
    price?: number;
    /**
     * Price type
     */
    price_type?: string;
    /**
     * Sku
     */
    sku?: string;
    file_extension?: string;
    max_characters?: number;
    image_size_x?: number;
    image_size_y?: number;
    values?: CatalogDataProductCustomOptionValuesInterface[];
    extension_attributes?: CatalogDataProductCustomOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductCustomOptionTypeInterface
 */
export interface CatalogDataProductCustomOptionTypeExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataProductCustomOptionTypeInterface {
    /**
     * Option type label
     */
    label: string;
    /**
     * Option type code
     */
    code: string;
    /**
     * Option type group
     */
    group: string;
    extension_attributes?: CatalogDataProductCustomOptionTypeExtensionInterface;
}
/**
 * 
 */
export interface CatalogDataProductCustomOptionValuesInterface {
    /**
     * Option title
     */
    title: string;
    /**
     * Sort order
     */
    sort_order: number;
    /**
     * Price
     */
    price: number;
    /**
     * Price type
     */
    price_type: string;
    /**
     * Sku
     */
    sku?: string;
    /**
     * Option type id
     */
    option_type_id?: number;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductInterface
 */
export interface CatalogDataProductExtensionInterface {
    website_ids?: number[];
    category_links?: CatalogDataCategoryLinkInterface[];
    stock_item?: CatalogInventoryDataStockItemInterface;
    bundle_product_options?: BundleDataOptionInterface[];
    configurable_product_options?: ConfigurableProductDataOptionInterface[];
    configurable_product_links?: number[];
    downloadable_product_links?: DownloadableDataLinkInterface[];
    downloadable_product_samples?: DownloadableDataSampleInterface[];
    giftcard_amounts?: GiftCardDataGiftcardAmountInterface[];
}
/**
 * 
 */
export interface CatalogDataProductInterface {
    /**
     * Id
     */
    id?: number;
    /**
     * Sku
     */
    sku: string;
    /**
     * Name
     */
    name?: string;
    /**
     * Attribute set id
     */
    attribute_set_id?: number;
    /**
     * Price
     */
    price?: number;
    /**
     * Status
     */
    status?: number;
    /**
     * Visibility
     */
    visibility?: number;
    /**
     * Type id
     */
    type_id?: string;
    /**
     * Created date
     */
    created_at?: string;
    /**
     * Updated date
     */
    updated_at?: string;
    /**
     * Weight
     */
    weight?: number;
    extension_attributes?: CatalogDataProductExtensionInterface;
    /**
     * Product links info
     */
    product_links?: CatalogDataProductLinkInterface[];
    /**
     * List of product options
     */
    options?: CatalogDataProductCustomOptionInterface[];
    /**
     * Media gallery entries
     */
    media_gallery_entries?: CatalogDataProductAttributeMediaGalleryEntryInterface[];
    /**
     * List of product tier prices
     */
    tier_prices?: CatalogDataProductTierPriceInterface[];
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkAttributeInterface
 */
export interface CatalogDataProductLinkAttributeExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataProductLinkAttributeInterface {
    /**
     * Attribute code
     */
    code: string;
    /**
     * Attribute type
     */
    type: string;
    extension_attributes?: CatalogDataProductLinkAttributeExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkInterface
 */
export interface CatalogDataProductLinkExtensionInterface {
    qty?: number;
}
/**
 * 
 */
export interface CatalogDataProductLinkInterface {
    /**
     * SKU
     */
    sku: string;
    /**
     * Link type
     */
    link_type: string;
    /**
     * Linked product sku
     */
    linked_product_sku: string;
    /**
     * Linked product type (simple, virtual, etc)
     */
    linked_product_type: string;
    /**
     * Linked item position
     */
    position: number;
    extension_attributes?: CatalogDataProductLinkExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductLinkTypeInterface
 */
export interface CatalogDataProductLinkTypeExtensionInterface {
}
/**
 * 
 */
export interface CatalogDataProductLinkTypeInterface {
    /**
     * Link type code
     */
    code: number;
    /**
     * Link type name
     */
    name: string;
    extension_attributes?: CatalogDataProductLinkTypeExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductOptionInterface
 */
export interface CatalogDataProductOptionExtensionInterface {
    custom_options?: CatalogDataCustomOptionInterface[];
    bundle_options?: BundleDataBundleOptionInterface[];
    configurable_item_options?: ConfigurableProductDataConfigurableItemOptionValueInterface[];
    downloadable_option?: DownloadableDataDownloadableOptionInterface;
    giftcard_item_option?: GiftCardDataGiftCardOptionInterface;
}
/**
 * Product option interface
 */
export interface CatalogDataProductOptionInterface {
    extension_attributes?: CatalogDataProductOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ButtonInterface
 */
export interface CatalogDataProductRenderButtonExtensionInterface {
}
/**
 * Button interface. This interface represents all manner of product buttons: add to cart, add to compare, etc... The buttons describes by this interface should have interaction with backend
 */
export interface CatalogDataProductRenderButtonInterface {
    /**
     * Post data
     */
    post_data: string;
    /**
     * Url, needed to add product to cart
     */
    url: string;
    /**
     * Flag whether a product has options or not
     */
    required_options: boolean;
    extension_attributes?: CatalogDataProductRenderButtonExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRenderInterface
 */
export interface CatalogDataProductRenderExtensionInterface {
    wishlist_button?: CatalogDataProductRenderButtonInterface;
    review_html?: string;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\FormattedPriceInfoInterface
 */
export interface CatalogDataProductRenderFormattedPriceInfoExtensionInterface {
}
/**
 * Formatted Price interface. Aggregate formatted html with price representations. E.g.: <span class="price">$9.00</span> Consider currency, rounding and html
 */
export interface CatalogDataProductRenderFormattedPriceInfoInterface {
    /**
     * Html with final price
     */
    final_price: string;
    /**
     * Max price of a product
     */
    max_price: string;
    /**
     * The minimal price of the product or variation
     */
    minimal_price: string;
    /**
     * Max regular price
     */
    max_regular_price: string;
    /**
     * Minimal regular price
     */
    minimal_regular_price: string;
    /**
     * Special price
     */
    special_price: string;
    /**
     * Price - is price of product without discounts and special price with taxes and fixed product tax
     */
    regular_price: string;
    extension_attributes?: CatalogDataProductRenderFormattedPriceInfoExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\ImageInterface
 */
export interface CatalogDataProductRenderImageExtensionInterface {
}
/**
 * Product Render image interface. Represents physical characteristics of image, that can be used in product listing or product view
 */
export interface CatalogDataProductRenderImageInterface {
    /**
     * Image url
     */
    url: string;
    /**
     * Image code
     */
    code: string;
    /**
     * Image height
     */
    height: number;
    /**
     * Image width in px
     */
    width: number;
    /**
     * Image label
     */
    label: string;
    /**
     * Resize width
     */
    resized_width: number;
    /**
     * Resize height
     */
    resized_height: number;
    extension_attributes?: CatalogDataProductRenderImageExtensionInterface;
}
/**
 * Represents Data Object which holds enough information to render product This information is put into part as Add To Cart or Add to Compare Data or Price Data
 */
export interface CatalogDataProductRenderInterface {
    add_to_cart_button: CatalogDataProductRenderButtonInterface;
    add_to_compare_button: CatalogDataProductRenderButtonInterface;
    price_info: CatalogDataProductRenderPriceInfoInterface;
    /**
     * Enough information, that needed to render image on front
     */
    images: CatalogDataProductRenderImageInterface[];
    /**
     * Product url
     */
    url: string;
    /**
     * Product identifier
     */
    id: number;
    /**
     * Product name
     */
    name: string;
    /**
     * Product type. Such as bundle, grouped, simple, etc...
     */
    type: string;
    /**
     * Information about product saleability (In Stock)
     */
    is_salable: string;
    /**
     * Information about current store id or requested store id
     */
    store_id: number;
    /**
     * Current or desired currency code to product
     */
    currency_code: string;
    extension_attributes: CatalogDataProductRenderExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductRender\PriceInfoInterface
 */
export interface CatalogDataProductRenderPriceInfoExtensionInterface {
    msrp?: MsrpDataProductRenderMsrpPriceInfoInterface;
    tax_adjustments?: CatalogDataProductRenderPriceInfoInterface;
    weee_attributes?: WeeeDataProductRenderWeeeAdjustmentAttributeInterface[];
    weee_adjustment?: string;
}
/**
 * Price interface.
 */
export interface CatalogDataProductRenderPriceInfoInterface {
    /**
     * Final price
     */
    final_price: number;
    /**
     * Max price of a product
     */
    max_price: number;
    /**
     * Max regular price
     */
    max_regular_price: number;
    /**
     * Minimal regular price
     */
    minimal_regular_price: number;
    /**
     * Special price
     */
    special_price: number;
    minimal_price: number;
    /**
     * Regular price
     */
    regular_price: number;
    formatted_prices: CatalogDataProductRenderFormattedPriceInfoInterface;
    extension_attributes?: CatalogDataProductRenderPriceInfoExtensionInterface;
}
/**
 * Dto that holds render information about products
 */
export interface CatalogDataProductRenderSearchResultsInterface {
    /**
     * List of products rendered information
     */
    items: CatalogDataProductRenderInterface[];
}
/**
 * 
 */
export interface CatalogDataProductSearchResultsInterface {
    /**
     * Attributes list.
     */
    items: CatalogDataProductInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTierPriceInterface
 */
export interface CatalogDataProductTierPriceExtensionInterface {
    percentage_value?: number;
    website_id?: number;
}
/**
 * 
 */
export interface CatalogDataProductTierPriceInterface {
    /**
     * Customer group id
     */
    customer_group_id: number;
    /**
     * Tier qty
     */
    qty: number;
    /**
     * Price value
     */
    value: number;
    extension_attributes?: CatalogDataProductTierPriceExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\ProductTypeInterface
 */
export interface CatalogDataProductTypeExtensionInterface {
}
/**
 * Product type details
 */
export interface CatalogDataProductTypeInterface {
    /**
     * Product type code
     */
    name: string;
    /**
     * Product type label
     */
    label: string;
    extension_attributes?: CatalogDataProductTypeExtensionInterface;
}
/**
 * 
 */
export interface CatalogDataProductWebsiteLinkInterface {
    sku: string;
    /**
     * Website ids
     */
    website_id: number;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\SpecialPriceInterface
 */
export interface CatalogDataSpecialPriceExtensionInterface {
}
/**
 * Product Special Price Interface is used to encapsulate data that can be processed by efficient price API.
 */
export interface CatalogDataSpecialPriceInterface {
    /**
     * Product special price value.
     */
    price: number;
    /**
     * ID of store, that contains special price value.
     */
    store_id: number;
    /**
     * SKU of product, that contains special price value.
     */
    sku: string;
    /**
     * Start date for special price in Y-m-d H:i:s format.
     */
    price_from: string;
    /**
     * End date for special price in Y-m-d H:i:s format.
     */
    price_to: string;
    extension_attributes?: CatalogDataSpecialPriceExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Catalog\Api\Data\TierPriceInterface
 */
export interface CatalogDataTierPriceExtensionInterface {
}
/**
 * Tier price interface.
 */
export interface CatalogDataTierPriceInterface {
    /**
     * Tier price.
     */
    price: number;
    /**
     * Tier price type.
     */
    price_type: string;
    /**
     * Website id.
     */
    website_id: number;
    /**
     * SKU.
     */
    sku: string;
    /**
     * Customer group.
     */
    customer_group: string;
    /**
     * Quantity.
     */
    quantity: number;
    extension_attributes?: CatalogDataTierPriceExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockItemInterface
 */
export interface CatalogInventoryDataStockItemExtensionInterface {
}
/**
 * Interface StockItem
 */
export interface CatalogInventoryDataStockItemInterface {
    item_id?: number;
    product_id?: number;
    /**
     * Stock identifier
     */
    stock_id?: number;
    qty: number;
    /**
     * Stock Availability
     */
    is_in_stock: boolean;
    is_qty_decimal: boolean;
    show_default_notification_message: boolean;
    use_config_min_qty: boolean;
    /**
     * Minimal quantity available for item status in stock
     */
    min_qty: number;
    use_config_min_sale_qty: number;
    /**
     * Minimum Qty Allowed in Shopping Cart or NULL when there is no limitation
     */
    min_sale_qty: number;
    use_config_max_sale_qty: boolean;
    /**
     * Maximum Qty Allowed in Shopping Cart data wrapper
     */
    max_sale_qty: number;
    use_config_backorders: boolean;
    /**
     * Backorders status
     */
    backorders: number;
    use_config_notify_stock_qty: boolean;
    /**
     * Notify for Quantity Below data wrapper
     */
    notify_stock_qty: number;
    use_config_qty_increments: boolean;
    /**
     * Quantity Increments data wrapper
     */
    qty_increments: number;
    use_config_enable_qty_inc: boolean;
    /**
     * Whether Quantity Increments is enabled
     */
    enable_qty_increments: boolean;
    use_config_manage_stock: boolean;
    /**
     * Can Manage Stock
     */
    manage_stock: boolean;
    low_stock_date: string;
    is_decimal_divided: boolean;
    stock_status_changed_auto: number;
    extension_attributes?: CatalogInventoryDataStockItemExtensionInterface;
}
/**
 * Stock Status collection interface
 */
export interface CatalogInventoryDataStockStatusCollectionInterface {
    /**
     * Items
     */
    items: CatalogInventoryDataStockStatusInterface[];
    search_criteria: CatalogInventoryStockStatusCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\CatalogInventory\Api\Data\StockStatusInterface
 */
export interface CatalogInventoryDataStockStatusExtensionInterface {
}
/**
 * Interface StockStatusInterface
 */
export interface CatalogInventoryDataStockStatusInterface {
    product_id: number;
    stock_id: number;
    qty: number;
    stock_status: number;
    stock_item: CatalogInventoryDataStockItemInterface;
    extension_attributes?: CatalogInventoryDataStockStatusExtensionInterface;
}
/**
 * Interface StockStatusCriteriaInterface
 */
export interface CatalogInventoryStockStatusCriteriaInterface {
    /**
     * Associated Mapper Interface name
     */
    mapper_interface_name: string;
    /**
     * Criteria objects added to current Composite Criteria
     */
    criteria_list: FrameworkCriteriaInterface[];
    /**
     * List of filters
     */
    filters: string[];
    /**
     * Ordering criteria
     */
    orders: string[];
    /**
     * Limit
     */
    limit: string[];
}
/**
 * ExtensionInterface class for @see \Magento\CheckoutAgreements\Api\Data\AgreementInterface
 */
export interface CheckoutAgreementsDataAgreementExtensionInterface {
}
/**
 * Interface AgreementInterface
 */
export interface CheckoutAgreementsDataAgreementInterface {
    /**
     * Agreement ID.
     */
    agreement_id: number;
    /**
     * Agreement name.
     */
    name: string;
    /**
     * Agreement content.
     */
    content: string;
    /**
     * Agreement content height. Otherwise, null.
     */
    content_height?: string;
    /**
     * Agreement checkbox text.
     */
    checkbox_text: string;
    /**
     * Agreement status.
     */
    is_active: boolean;
    /**
     * * true - HTML. * false - plain text.
     */
    is_html: boolean;
    /**
     * The agreement applied mode.
     */
    mode: number;
    extension_attributes?: CheckoutAgreementsDataAgreementExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Checkout\Api\Data\PaymentDetailsInterface
 */
export interface CheckoutDataPaymentDetailsExtensionInterface {
}
/**
 * Interface PaymentDetailsInterface
 */
export interface CheckoutDataPaymentDetailsInterface {
    payment_methods: QuoteDataPaymentMethodInterface[];
    totals: QuoteDataTotalsInterface;
    extension_attributes?: CheckoutDataPaymentDetailsExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Checkout\Api\Data\ShippingInformationInterface
 */
export interface CheckoutDataShippingInformationExtensionInterface {
}
/**
 * Interface ShippingInformationInterface
 */
export interface CheckoutDataShippingInformationInterface {
    shipping_address: QuoteDataAddressInterface;
    billing_address?: QuoteDataAddressInterface;
    /**
     * Shipping method code
     */
    shipping_method_code: string;
    /**
     * Carrier code
     */
    shipping_carrier_code: string;
    extension_attributes?: CheckoutDataShippingInformationExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Checkout\Api\Data\TotalsInformationInterface
 */
export interface CheckoutDataTotalsInformationExtensionInterface {
}
/**
 * Interface TotalsInformationInterface
 */
export interface CheckoutDataTotalsInformationInterface {
    address: QuoteDataAddressInterface;
    /**
     * Shipping method code
     */
    shipping_method_code?: string;
    /**
     * Carrier code
     */
    shipping_carrier_code?: string;
    extension_attributes?: CheckoutDataTotalsInformationExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * CMS block interface.
 */
export interface CmsDataBlockInterface {
    /**
     * ID
     */
    id?: number;
    /**
     * Identifier
     */
    identifier: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Content
     */
    content?: string;
    /**
     * Creation time
     */
    creation_time?: string;
    /**
     * Update time
     */
    update_time?: string;
    /**
     * Active
     */
    active?: boolean;
}
/**
 * Interface for cms block search results.
 */
export interface CmsDataBlockSearchResultsInterface {
    /**
     * Blocks list.
     */
    items: CmsDataBlockInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * CMS page interface.
 */
export interface CmsDataPageInterface {
    /**
     * ID
     */
    id?: number;
    /**
     * Identifier
     */
    identifier: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Page layout
     */
    page_layout?: string;
    /**
     * Meta title
     */
    meta_title?: string;
    /**
     * Meta keywords
     */
    meta_keywords?: string;
    /**
     * Meta description
     */
    meta_description?: string;
    /**
     * Content heading
     */
    content_heading?: string;
    /**
     * Content
     */
    content?: string;
    /**
     * Creation time
     */
    creation_time?: string;
    /**
     * Update time
     */
    update_time?: string;
    /**
     * Sort order
     */
    sort_order?: string;
    /**
     * Layout update xml
     */
    layout_update_xml?: string;
    /**
     * Custom theme
     */
    custom_theme?: string;
    /**
     * Custom root template
     */
    custom_root_template?: string;
    /**
     * Custom layout update xml
     */
    custom_layout_update_xml?: string;
    /**
     * Custom theme from
     */
    custom_theme_from?: string;
    /**
     * Custom theme to
     */
    custom_theme_to?: string;
    /**
     * Active
     */
    active?: boolean;
}
/**
 * Interface for cms page search results.
 */
export interface CmsDataPageSearchResultsInterface {
    /**
     * Pages list.
     */
    items: CmsDataPageInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Credit balance data transfer object interface.
 */
export interface CompanyCreditDataCreditBalanceOptionsInterface {
    /**
     * Purchase order number.
     */
    purchase_order: string;
    /**
     * Order increment.
     */
    order_increment: string;
    /**
     * Currency display.
     */
    currency_display: string;
    /**
     * Currency base.
     */
    currency_base: string;
}
/**
 * Credit Data interface.
 */
export interface CompanyCreditDataCreditDataInterface {
    /**
     * ID.
     */
    id?: number;
    /**
     * Company id.
     */
    company_id?: number;
    /**
     * Credit Limit.
     */
    credit_limit?: number;
    /**
     * Balance.
     */
    balance?: number;
    /**
     * Currency Code.
     */
    currency_code?: string;
    /**
     * Exceed Limit.
     */
    exceed_limit: boolean;
    /**
     * Available Limit.
     */
    available_limit?: number;
}
/**
 * ExtensionInterface class for @see \Magento\CompanyCredit\Api\Data\CreditLimitInterface
 */
export interface CompanyCreditDataCreditLimitExtensionInterface {
}
/**
 * Credit Limit data transfer object interface.
 */
export interface CompanyCreditDataCreditLimitInterface {
    /**
     * ID.
     */
    id?: number;
    /**
     * Company id.
     */
    company_id?: number;
    /**
     * Credit Limit.
     */
    credit_limit?: number;
    /**
     * Balance.
     */
    balance?: number;
    /**
     * Currency Code.
     */
    currency_code?: string;
    /**
     * Exceed Limit.
     */
    exceed_limit: boolean;
    /**
     * Available Limit.
     */
    available_limit?: number;
    /**
     * Credit comment for company credit history.
     */
    credit_comment?: string;
    extension_attributes?: CompanyCreditDataCreditLimitExtensionInterface;
}
/**
 * Interface for Credit Limit search results.
 */
export interface CompanyCreditDataCreditLimitSearchResultsInterface {
    /**
     * Credit Limit list.
     */
    items: CompanyCreditDataCreditDataInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * History data transfer object interface.
 */
export interface CompanyCreditDataHistoryDataInterface {
    /**
     * ID.
     */
    id?: number;
    /**
     * Company credit id.
     */
    company_credit_id?: number;
    /**
     * User Id.
     */
    user_id?: number;
    /**
     * User type: integration, admin, customer.
     */
    user_type?: number;
    /**
     * Currency code of credit.
     */
    currency_credit?: string;
    /**
     * Currency code of operation.
     */
    currency_operation?: string;
    /**
     * Currency rate between credit and operation currencies.
     */
    rate: number;
    /**
     * Rate between credit and base currencies.
     */
    rate_credit?: number;
    /**
     * Amount.
     */
    amount: number;
    /**
     * Outstanding balance.
     */
    balance: number;
    /**
     * Credit limit.
     */
    credit_limit: number;
    /**
     * Available limit.
     */
    available_limit?: number;
    /**
     * Type of operation.
     */
    type?: number;
    /**
     * Operation datetime.
     */
    datetime?: string;
    /**
     * Purchase Order number.
     */
    purchase_order?: string;
    /**
     * Comment.
     */
    comment?: string;
}
/**
 * Interface for History search results.
 */
export interface CompanyCreditDataHistorySearchResultsInterface {
    /**
     * History list.
     */
    items: CompanyCreditDataHistoryDataInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Company\Api\Data\CompanyCustomerInterface
 */
export interface CompanyDataCompanyCustomerExtensionInterface {
}
/**
 * Extended customer custom attributes interface.
 */
export interface CompanyDataCompanyCustomerInterface {
    /**
     * Customer ID.
     */
    customer_id?: number;
    /**
     * Company ID.
     */
    company_id?: number;
    /**
     * Get job title.
     */
    job_title?: string;
    /**
     * Customer status.
     */
    status?: number;
    /**
     * Get telephone.
     */
    telephone?: string;
    extension_attributes?: CompanyDataCompanyCustomerExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Company\Api\Data\CompanyInterface
 */
export interface CompanyDataCompanyExtensionInterface {
    applicable_payment_method?: number;
    available_payment_methods?: string;
    use_config_settings?: number;
    quote_config?: NegotiableQuoteDataCompanyQuoteConfigInterface;
}
/**
 * Interface for Company entity.
 */
export interface CompanyDataCompanyInterface {
    /**
     * Id.
     */
    id?: number;
    /**
     * Status.
     */
    status?: number;
    /**
     * Company name.
     */
    company_name?: string;
    /**
     * Legal name.
     */
    legal_name?: string;
    /**
     * Company email.
     */
    company_email?: string;
    /**
     * Vat tax id.
     */
    vat_tax_id?: string;
    /**
     * Reseller Id.
     */
    reseller_id?: string;
    /**
     * Comment.
     */
    comment?: string;
    /**
     * Street.
     */
    street: string[];
    /**
     * City.
     */
    city?: string;
    /**
     * Country.
     */
    country_id?: string;
    /**
     * Region.
     */
    region?: string;
    /**
     * Region Id.
     */
    region_id?: string;
    /**
     * Postcode.
     */
    postcode?: string;
    /**
     * Telephone.
     */
    telephone?: string;
    /**
     * Customer Group Id.
     */
    customer_group_id: number;
    /**
     * Sales Representative Id.
     */
    sales_representative_id: number;
    /**
     * Reject Reason.
     */
    reject_reason: string;
    /**
     * Rejected at time.
     */
    rejected_at: string;
    /**
     * Company admin customer id.
     */
    super_user_id: number;
    extension_attributes?: CompanyDataCompanyExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Company\Api\Data\CompanyOrderInterface
 */
export interface CompanyDataCompanyOrderExtensionInterface {
}
/**
 * Order company extension attributes interface. Adds new company attributes to orders.
 */
export interface CompanyDataCompanyOrderInterface {
    /**
     * Order ID.
     */
    order_id?: number;
    /**
     * Company ID.
     */
    company_id?: number;
    /**
     * Company name.
     */
    company_name?: string;
    extension_attributes?: CompanyDataCompanyOrderExtensionInterface;
}
/**
 * Interface for company search results
 */
export interface CompanyDataCompanySearchResultsInterface {
    /**
     * Companies list
     */
    items: CompanyDataCompanyInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Company\Api\Data\HierarchyInterface
 */
export interface CompanyDataHierarchyExtensionInterface {
}
/**
 * Company hierarchy DTO interface for WebAPI.
 */
export interface CompanyDataHierarchyInterface {
    /**
     * Structure ID.
     */
    structure_id?: number;
    /**
     * Entity ID.
     */
    entity_id?: number;
    /**
     * Entity type.
     */
    entity_type?: string;
    /**
     * Structure parent ID.
     */
    structure_parent_id?: number;
    extension_attributes?: CompanyDataHierarchyExtensionInterface;
}
/**
 * Permission interface.
 */
export interface CompanyDataPermissionInterface {
    /**
     * Id.
     */
    id?: number;
    /**
     * Role id.
     */
    role_id?: number;
    /**
     * Resource id.
     */
    resource_id: string;
    /**
     * Permission.
     */
    permission: string;
}
/**
 * ExtensionInterface class for @see \Magento\Company\Api\Data\RoleInterface
 */
export interface CompanyDataRoleExtensionInterface {
}
/**
 * Role data transfer object interface.
 */
export interface CompanyDataRoleInterface {
    /**
     * Role id.
     */
    id?: number;
    /**
     * Role name.
     */
    role_name?: string;
    /**
     * Permissions.
     */
    permissions: CompanyDataPermissionInterface[];
    /**
     * Company id.
     */
    company_id?: number;
    extension_attributes?: CompanyDataRoleExtensionInterface;
}
/**
 * Interface for role search results.
 */
export interface CompanyDataRoleSearchResultsInterface {
    /**
     * Roles list.
     */
    items: CompanyDataRoleInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Company\Api\Data\TeamInterface
 */
export interface CompanyDataTeamExtensionInterface {
}
/**
 * Team interface
 */
export interface CompanyDataTeamInterface {
    /**
     * ID
     */
    id?: number;
    /**
     * Name
     */
    name?: string;
    /**
     * Description
     */
    description?: string;
    extension_attributes?: CompanyDataTeamExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * Interface for company team search results
 */
export interface CompanyDataTeamSearchResultsInterface {
    /**
     * Teams list
     */
    items: CompanyDataTeamInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\ConfigurableItemOptionValueInterface
 */
export interface ConfigurableProductDataConfigurableItemOptionValueExtensionInterface {
}
/**
 * Interface ConfigurableItemOptionValueInterface
 */
export interface ConfigurableProductDataConfigurableItemOptionValueInterface {
    /**
     * Option SKU
     */
    option_id: string;
    /**
     * Item id
     */
    option_value?: number;
    extension_attributes?: ConfigurableProductDataConfigurableItemOptionValueExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionInterface
 */
export interface ConfigurableProductDataOptionExtensionInterface {
}
/**
 * Interface OptionInterface
 */
export interface ConfigurableProductDataOptionInterface {
    id?: number;
    attribute_id?: string;
    label?: string;
    position?: number;
    is_use_default?: boolean;
    values?: ConfigurableProductDataOptionValueInterface[];
    extension_attributes?: ConfigurableProductDataOptionExtensionInterface;
    product_id?: number;
}
/**
 * ExtensionInterface class for @see \Magento\ConfigurableProduct\Api\Data\OptionValueInterface
 */
export interface ConfigurableProductDataOptionValueExtensionInterface {
}
/**
 * Interface OptionValueInterface
 */
export interface ConfigurableProductDataOptionValueInterface {
    value_index: number;
    extension_attributes?: ConfigurableProductDataOptionValueExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\AddressInterface
 */
export interface CustomerDataAddressExtensionInterface {
}
/**
 * Customer address interface.
 */
export interface CustomerDataAddressInterface {
    /**
     * ID
     */
    id?: number;
    /**
     * Customer ID
     */
    customer_id?: number;
    region?: CustomerDataRegionInterface;
    /**
     * Region ID
     */
    region_id?: number;
    /**
     * Country code in ISO_3166-2 format
     */
    country_id?: string;
    /**
     * Street
     */
    street?: string[];
    /**
     * Company
     */
    company?: string;
    /**
     * Telephone number
     */
    telephone?: string;
    /**
     * Fax number
     */
    fax?: string;
    /**
     * Postcode
     */
    postcode?: string;
    /**
     * City name
     */
    city?: string;
    /**
     * First name
     */
    firstname?: string;
    /**
     * Last name
     */
    lastname?: string;
    /**
     * Middle name
     */
    middlename?: string;
    /**
     * Prefix
     */
    prefix?: string;
    /**
     * Suffix
     */
    suffix?: string;
    /**
     * Vat id
     */
    vat_id?: string;
    /**
     * If this address is default shipping address.
     */
    default_shipping?: boolean;
    /**
     * If this address is default billing address
     */
    default_billing?: boolean;
    extension_attributes?: CustomerDataAddressExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * Customer attribute metadata interface.
 */
export interface CustomerDataAttributeMetadataInterface {
    /**
     * HTML for input element.
     */
    frontend_input: string;
    /**
     * Template used for input (e.g. "date")
     */
    input_filter: string;
    /**
     * Label of the store.
     */
    store_label: string;
    /**
     * Validation rules.
     */
    validation_rules: CustomerDataValidationRuleInterface[];
    /**
     * Of lines of the attribute value.
     */
    multiline_count: number;
    /**
     * Attribute is visible on frontend.
     */
    visible: boolean;
    /**
     * Attribute is required.
     */
    required: boolean;
    /**
     * Data model for attribute.
     */
    data_model: string;
    /**
     * Options of the attribute (key => value pairs for select)
     */
    options: CustomerDataOptionInterface[];
    /**
     * Class which is used to display the attribute on frontend.
     */
    frontend_class: string;
    /**
     * Current attribute has been defined by a user.
     */
    user_defined: boolean;
    /**
     * Attributes sort order.
     */
    sort_order: number;
    /**
     * Label which supposed to be displayed on frontend.
     */
    frontend_label: string;
    /**
     * The note attribute for the element.
     */
    note: string;
    /**
     * This is a system attribute.
     */
    system: boolean;
    /**
     * Backend type.
     */
    backend_type: string;
    /**
     * It is used in customer grid
     */
    is_used_in_grid?: boolean;
    /**
     * It is visible in customer grid
     */
    is_visible_in_grid?: boolean;
    /**
     * It is filterable in customer grid
     */
    is_filterable_in_grid?: boolean;
    /**
     * It is searchable in customer grid
     */
    is_searchable_in_grid?: boolean;
    /**
     * Code of the attribute.
     */
    attribute_code: string;
}
/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\CustomerInterface
 */
export interface CustomerDataCustomerExtensionInterface {
    company_attributes?: CompanyDataCompanyCustomerInterface;
    is_subscribed?: boolean;
}
/**
 * Customer interface.
 */
export interface CustomerDataCustomerInterface {
    /**
     * Customer id
     */
    id?: number;
    /**
     * Group id
     */
    group_id?: number;
    /**
     * Default billing address id
     */
    default_billing?: string;
    /**
     * Default shipping address id
     */
    default_shipping?: string;
    /**
     * Confirmation
     */
    confirmation?: string;
    /**
     * Created at time
     */
    created_at?: string;
    /**
     * Updated at time
     */
    updated_at?: string;
    /**
     * Created in area
     */
    created_in?: string;
    /**
     * Date of birth
     */
    dob?: string;
    /**
     * Email address
     */
    email: string;
    /**
     * First name
     */
    firstname: string;
    /**
     * Last name
     */
    lastname: string;
    /**
     * Middle name
     */
    middlename?: string;
    /**
     * Prefix
     */
    prefix?: string;
    /**
     * Suffix
     */
    suffix?: string;
    /**
     * Gender
     */
    gender?: number;
    /**
     * Store id
     */
    store_id?: number;
    /**
     * Tax Vat
     */
    taxvat?: string;
    /**
     * Website id
     */
    website_id?: number;
    /**
     * Customer addresses.
     */
    addresses?: CustomerDataAddressInterface[];
    /**
     * Disable auto group change flag.
     */
    disable_auto_group_change?: number;
    extension_attributes?: CustomerDataCustomerExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * Interface for customer search results.
 */
export interface CustomerDataCustomerSearchResultsInterface {
    /**
     * Customers list.
     */
    items: CustomerDataCustomerInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\GroupInterface
 */
export interface CustomerDataGroupExtensionInterface {
}
/**
 * Customer group interface.
 */
export interface CustomerDataGroupInterface {
    /**
     * Id
     */
    id?: number;
    /**
     * Code
     */
    code: string;
    /**
     * Tax class id
     */
    tax_class_id: number;
    /**
     * Tax class name
     */
    tax_class_name?: string;
    extension_attributes?: CustomerDataGroupExtensionInterface;
}
/**
 * Interface for customer groups search results.
 */
export interface CustomerDataGroupSearchResultsInterface {
    /**
     * Customer groups list.
     */
    items: CustomerDataGroupInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Option interface.
 */
export interface CustomerDataOptionInterface {
    /**
     * Option label
     */
    label: string;
    /**
     * Option value
     */
    value?: string;
    /**
     * Nested options
     */
    options?: CustomerDataOptionInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Customer\Api\Data\RegionInterface
 */
export interface CustomerDataRegionExtensionInterface {
}
/**
 * Customer address region interface.
 */
export interface CustomerDataRegionInterface {
    /**
     * Region code
     */
    region_code: string;
    /**
     * Region
     */
    region: string;
    /**
     * Region id
     */
    region_id: number;
    extension_attributes?: CustomerDataRegionExtensionInterface;
}
/**
 * Validation results interface.
 */
export interface CustomerDataValidationResultsInterface {
    /**
     * If the provided data is valid.
     */
    valid: boolean;
    /**
     * Error messages as array in case of validation failure, else return empty array.
     */
    messages: string[];
}
/**
 * Validation rule interface.
 */
export interface CustomerDataValidationRuleInterface {
    /**
     * Validation rule name
     */
    name: string;
    /**
     * Validation rule value
     */
    value: string;
}
/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\CountryInformationInterface
 */
export interface DirectoryDataCountryInformationExtensionInterface {
}
/**
 * Country Information interface.
 */
export interface DirectoryDataCountryInformationInterface {
    /**
     * The country id for the store.
     */
    id: string;
    /**
     * The country 2 letter abbreviation for the store.
     */
    two_letter_abbreviation: string;
    /**
     * The country 3 letter abbreviation for the store.
     */
    three_letter_abbreviation: string;
    /**
     * The country full name (in store locale) for the store.
     */
    full_name_locale: string;
    /**
     * The country full name (in English) for the store.
     */
    full_name_english: string;
    /**
     * The available regions for the store.
     */
    available_regions?: DirectoryDataRegionInformationInterface[];
    extension_attributes?: DirectoryDataCountryInformationExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\CurrencyInformationInterface
 */
export interface DirectoryDataCurrencyInformationExtensionInterface {
}
/**
 * Currency Information interface.
 */
export interface DirectoryDataCurrencyInformationInterface {
    /**
     * The base currency code for the store.
     */
    base_currency_code: string;
    /**
     * The currency symbol of the base currency for the store.
     */
    base_currency_symbol: string;
    /**
     * The default display currency code for the store.
     */
    default_display_currency_code: string;
    /**
     * The currency symbol of the default display currency for the store.
     */
    default_display_currency_symbol: string;
    /**
     * The list of allowed currency codes for the store.
     */
    available_currency_codes: string[];
    /**
     * The list of exchange rate information for the store.
     */
    exchange_rates: DirectoryDataExchangeRateInterface[];
    extension_attributes?: DirectoryDataCurrencyInformationExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\ExchangeRateInterface
 */
export interface DirectoryDataExchangeRateExtensionInterface {
}
/**
 * Exchange Rate interface.
 */
export interface DirectoryDataExchangeRateInterface {
    /**
     * The currency code associated with the exchange rate.
     */
    currency_to: string;
    /**
     * The exchange rate for the associated currency and the store's base currency.
     */
    rate: number;
    extension_attributes?: DirectoryDataExchangeRateExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Directory\Api\Data\RegionInformationInterface
 */
export interface DirectoryDataRegionInformationExtensionInterface {
}
/**
 * Region Information interface.
 */
export interface DirectoryDataRegionInformationInterface {
    /**
     * Region id
     */
    id: string;
    /**
     * Region code
     */
    code: string;
    /**
     * Region name
     */
    name: string;
    extension_attributes?: DirectoryDataRegionInformationExtensionInterface;
}
/**
 * Downloadable Option
 */
export interface DownloadableDataDownloadableOptionInterface {
    /**
     * The list of downloadable links
     */
    downloadable_links: number[];
}
/**
 * ExtensionInterface class for @see \Magento\Downloadable\Api\Data\File\ContentInterface
 */
export interface DownloadableDataFileContentExtensionInterface {
}
/**
 * 
 */
export interface DownloadableDataFileContentInterface {
    /**
     * Data (base64 encoded content)
     */
    file_data: string;
    /**
     * File name
     */
    name: string;
    extension_attributes?: DownloadableDataFileContentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Downloadable\Api\Data\LinkInterface
 */
export interface DownloadableDataLinkExtensionInterface {
}
/**
 * 
 */
export interface DownloadableDataLinkInterface {
    /**
     * Sample(or link) id
     */
    id?: number;
    title?: string;
    sort_order: number;
    /**
     * Shareable status
     */
    is_shareable: number;
    /**
     * Price
     */
    price: number;
    /**
     * Of downloads per user
     */
    number_of_downloads?: number;
    link_type: string;
    /**
     * relative file path
     */
    link_file?: string;
    link_file_content?: DownloadableDataFileContentInterface;
    /**
     * Link url or null when type is 'file'
     */
    link_url?: string;
    sample_type: string;
    /**
     * relative file path
     */
    sample_file?: string;
    sample_file_content?: DownloadableDataFileContentInterface;
    /**
     * file URL
     */
    sample_url?: string;
    extension_attributes?: DownloadableDataLinkExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Downloadable\Api\Data\SampleInterface
 */
export interface DownloadableDataSampleExtensionInterface {
}
/**
 * 
 */
export interface DownloadableDataSampleInterface {
    /**
     * Sample(or link) id
     */
    id?: number;
    /**
     * Title
     */
    title: string;
    /**
     * Order index for sample
     */
    sort_order: number;
    sample_type: string;
    /**
     * relative file path
     */
    sample_file?: string;
    sample_file_content?: DownloadableDataFileContentInterface;
    /**
     * file URL
     */
    sample_url?: string;
    extension_attributes?: DownloadableDataSampleExtensionInterface;
}
/**
 * Interface AttributeFrontendLabelInterface
 */
export interface EavDataAttributeFrontendLabelInterface {
    /**
     * Store id
     */
    store_id?: number;
    /**
     * Option label
     */
    label?: string;
}
/**
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeGroupInterface
 */
export interface EavDataAttributeGroupExtensionInterface {
    attribute_group_code?: string;
    sort_order?: string;
}
/**
 * Interface AttributeGroupInterface
 */
export interface EavDataAttributeGroupInterface {
    /**
     * Id
     */
    attribute_group_id?: string;
    /**
     * Name
     */
    attribute_group_name?: string;
    /**
     * Attribute set id
     */
    attribute_set_id?: number;
    extension_attributes?: EavDataAttributeGroupExtensionInterface;
}
/**
 * Interface AttributeGroupSearchResultsInterface
 */
export interface EavDataAttributeGroupSearchResultsInterface {
    /**
     * Attribute sets list.
     */
    items: EavDataAttributeGroupInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Created from:
 */
export interface EavDataAttributeOptionInterface {
    /**
     * Option label
     */
    label: string;
    /**
     * Option value
     */
    value: string;
    /**
     * Option order
     */
    sort_order?: number;
    /**
     * Default
     */
    is_default?: boolean;
    /**
     * Option label for store scopes
     */
    store_labels?: EavDataAttributeOptionLabelInterface[];
}
/**
 * Interface AttributeOptionLabelInterface
 */
export interface EavDataAttributeOptionLabelInterface {
    /**
     * Store id
     */
    store_id?: number;
    /**
     * Option label
     */
    label?: string;
}
/**
 * ExtensionInterface class for @see \Magento\Eav\Api\Data\AttributeSetInterface
 */
export interface EavDataAttributeSetExtensionInterface {
}
/**
 * Interface AttributeSetInterface
 */
export interface EavDataAttributeSetInterface {
    /**
     * Attribute set ID
     */
    attribute_set_id?: number;
    /**
     * Attribute set name
     */
    attribute_set_name: string;
    /**
     * Attribute set sort order index
     */
    sort_order: number;
    /**
     * Attribute set entity type id
     */
    entity_type_id?: number;
    extension_attributes?: EavDataAttributeSetExtensionInterface;
}
/**
 * Interface AttributeSetSearchResultsInterface
 */
export interface EavDataAttributeSetSearchResultsInterface {
    /**
     * Attribute sets list.
     */
    items: EavDataAttributeSetInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Interface AttributeValidationRuleInterface
 */
export interface EavDataAttributeValidationRuleInterface {
    /**
     * Object key
     */
    key: string;
    /**
     * Object value
     */
    value: string;
}
/**
 * Errors list
 */
export type ErrorErrors = ErrorErrorsItem[];
/**
 * Error details
 */
export interface ErrorErrorsItem {
    /**
     * Error message
     */
    message?: string;
    parameters?: ErrorParameters;
}
/**
 * Error parameters list
 */
export type ErrorParameters = ErrorParametersItem[];
/**
 * Error parameters item
 */
export interface ErrorParametersItem {
    /**
     * ACL resource
     */
    resources?: string;
    /**
     * Missing or invalid field name
     */
    fieldName?: string;
    /**
     * Incorrect field value
     */
    fieldValue?: string;
}
export interface ErrorResponse {
    /**
     * Error message
     */
    message: string;
    errors?: ErrorErrors;
    /**
     * Error code
     */
    code?: number;
    parameters?: ErrorParameters;
    /**
     * Stack trace
     */
    trace?: string;
}
/**
 * Interface for custom attribute value.
 */
export interface FrameworkAttributeInterface {
    /**
     * Attribute code
     */
    attribute_code: string;
    /**
     * Attribute value
     */
    value: string;
}
/**
 * Interface CriteriaInterface
 */
export interface FrameworkCriteriaInterface {
    /**
     * Associated Mapper Interface name
     */
    mapper_interface_name: string;
    /**
     * Criteria objects added to current Composite Criteria
     */
    criteria_list: FrameworkCriteriaInterface[];
    /**
     * List of filters
     */
    filters: string[];
    /**
     * Ordering criteria
     */
    orders: string[];
    /**
     * Limit
     */
    limit: string[];
}
/**
 * Image Content data interface
 */
export interface FrameworkDataImageContentInterface {
    /**
     * Media data (base64 encoded content)
     */
    base64_encoded_data: string;
    /**
     * MIME type
     */
    type: string;
    /**
     * Image name
     */
    name: string;
}
/**
 * Video Content data interface
 */
export interface FrameworkDataVideoContentInterface {
    /**
     * MIME type
     */
    media_type: string;
    /**
     * Provider
     */
    video_provider: string;
    /**
     * Video URL
     */
    video_url: string;
    /**
     * Title
     */
    video_title: string;
    /**
     * Video Description
     */
    video_description: string;
    /**
     * Metadata
     */
    video_metadata: string;
}
/**
 * Filter which can be used by any methods from service layer.
 */
export interface FrameworkFilter {
    /**
     * Field
     */
    field: string;
    /**
     * Value
     */
    value: string;
    /**
     * Condition type
     */
    condition_type?: string;
}
/**
 * Provides metadata about an attribute.
 */
export interface FrameworkMetadataObjectInterface {
    /**
     * Code of the attribute.
     */
    attribute_code: string;
}
/**
 * Faceted data
 */
export interface FrameworkSearchAggregationInterface {
    /**
     * All Document fields
     */
    buckets: FrameworkSearchBucketInterface[];
    /**
     * Document field names
     */
    bucket_names: string[];
}
/**
 * Interface \Magento\Framework\Api\Search\AggregationValueInterface
 */
export interface FrameworkSearchAggregationValueInterface {
    /**
     * Aggregation
     */
    value: string;
    /**
     * Metrics
     */
    metrics: string[];
}
/**
 * Facet Bucket
 */
export interface FrameworkSearchBucketInterface {
    /**
     * Field name
     */
    name: string;
    /**
     * Field values
     */
    values: FrameworkSearchAggregationValueInterface[];
}
/**
 * Search criteria interface.
 */
export interface FrameworkSearchCriteriaInterface {
    /**
     * A list of filter groups.
     */
    filter_groups: FrameworkSearchFilterGroup[];
    /**
     * Sort order.
     */
    sort_orders?: FrameworkSortOrder[];
    /**
     * Page size.
     */
    page_size?: number;
    /**
     * Current page.
     */
    current_page?: number;
}
/**
 * Interface \Magento\Framework\Api\Search\DocumentInterface
 */
export interface FrameworkSearchDocumentInterface {
    id: number;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * Groups two or more filters together using a logical OR
 */
export interface FrameworkSearchFilterGroup {
    /**
     * A list of filters in this group
     */
    filters?: FrameworkFilter[];
}
/**
 * Interface SearchCriteriaInterface
 */
export interface FrameworkSearchSearchCriteriaInterface {
    request_name: string;
    /**
     * A list of filter groups.
     */
    filter_groups: FrameworkSearchFilterGroup[];
    /**
     * Sort order.
     */
    sort_orders?: FrameworkSortOrder[];
    /**
     * Page size.
     */
    page_size?: number;
    /**
     * Current page.
     */
    current_page?: number;
}
/**
 * Interface SearchResultInterface
 */
export interface FrameworkSearchSearchResultInterface {
    items: FrameworkSearchDocumentInterface[];
    aggregations: FrameworkSearchAggregationInterface;
    search_criteria: FrameworkSearchSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Data object for sort order.
 */
export interface FrameworkSortOrder {
    /**
     * Sorting field.
     */
    field: string;
    /**
     * Sorting direction.
     */
    direction: string;
}
/**
 * ExtensionInterface class for @see \Magento\GiftCardAccount\Api\Data\GiftCardAccountInterface
 */
export interface GiftCardAccountDataGiftCardAccountExtensionInterface {
}
/**
 * Gift Card Account data
 */
export interface GiftCardAccountDataGiftCardAccountInterface {
    /**
     * Cards codes
     */
    gift_cards: string[];
    /**
     * Cards amount in quote currency
     */
    gift_cards_amount: number;
    /**
     * Cards amount in base currency
     */
    base_gift_cards_amount: number;
    /**
     * Cards amount used in quote currency
     */
    gift_cards_amount_used: number;
    /**
     * Cards amount used in base currency
     */
    base_gift_cards_amount_used: number;
    extension_attributes?: GiftCardAccountDataGiftCardAccountExtensionInterface;
}
/**
 * Gift Card data
 */
export interface GiftCardAccountDataGiftCardInterface {
    /**
     * Id
     */
    id: number;
    /**
     * Code
     */
    code: string;
    /**
     * Amount
     */
    amount: number;
    /**
     * Base Amount
     */
    base_amount: number;
}
/**
 * ExtensionInterface class for @see \Magento\GiftCard\Api\Data\GiftCardOptionInterface
 */
export interface GiftCardDataGiftCardOptionExtensionInterface {
}
/**
 * Interface GiftCardOptionInterface
 */
export interface GiftCardDataGiftCardOptionInterface {
    /**
     * Gift card amount.
     */
    giftcard_amount: string;
    /**
     * Gift card open amount value.
     */
    custom_giftcard_amount?: number;
    /**
     * Gift card sender name.
     */
    giftcard_sender_name: string;
    /**
     * Gift card recipient name.
     */
    giftcard_recipient_name: string;
    /**
     * Gift card sender email.
     */
    giftcard_sender_email: string;
    /**
     * Gift card recipient email.
     */
    giftcard_recipient_email: string;
    /**
     * Giftcard message.
     */
    giftcard_message?: string;
    extension_attributes?: GiftCardDataGiftCardOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\GiftCard\Api\Data\GiftcardAmountInterface
 */
export interface GiftCardDataGiftcardAmountExtensionInterface {
}
/**
 * Interface GiftcardAmountInterface: this interface is used to serialize and deserialize EAV attribute giftcard_amounts
 */
export interface GiftCardDataGiftcardAmountInterface {
    attribute_id: number;
    website_id: number;
    value: number;
    website_value: number;
    extension_attributes?: GiftCardDataGiftcardAmountExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\GiftMessage\Api\Data\MessageInterface
 */
export interface GiftMessageDataMessageExtensionInterface {
    entity_id?: string;
    entity_type?: string;
    wrapping_id?: number;
    wrapping_allow_gift_receipt?: boolean;
    wrapping_add_printed_card?: boolean;
}
/**
 * Interface MessageInterface
 */
export interface GiftMessageDataMessageInterface {
    /**
     * Gift message ID. Otherwise, null.
     */
    gift_message_id?: number;
    /**
     * Customer ID. Otherwise, null.
     */
    customer_id?: number;
    /**
     * Sender name.
     */
    sender: string;
    /**
     * Recipient name.
     */
    recipient: string;
    /**
     * Message text.
     */
    message: string;
    extension_attributes?: GiftMessageDataMessageExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\GiftWrapping\Api\Data\WrappingInterface
 */
export interface GiftWrappingDataWrappingExtensionInterface {
}
/**
 * Interface WrappingInterface
 */
export interface GiftWrappingDataWrappingInterface {
    wrapping_id?: number;
    design: string;
    status: number;
    base_price: number;
    image_name?: string;
    image_base64_content?: string;
    base_currency_code?: string;
    website_ids?: number[];
    /**
     * Wrapping image URL.
     */
    image_url?: string;
    extension_attributes?: GiftWrappingDataWrappingExtensionInterface;
}
/**
 * Interface WrappingSearchResultsInterface
 */
export interface GiftWrappingDataWrappingSearchResultsInterface {
    /**
     * Items
     */
    items: GiftWrappingDataWrappingInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Msrp\Api\Data\ProductRender\MsrpPriceInfoInterface
 */
export interface MsrpDataProductRenderMsrpPriceInfoExtensionInterface {
}
/**
 * Price interface.
 */
export interface MsrpDataProductRenderMsrpPriceInfoInterface {
    msrp_price: string;
    is_applicable: string;
    is_shown_price_on_gesture: string;
    msrp_message: string;
    explanation_message: string;
    extension_attributes?: MsrpDataProductRenderMsrpPriceInfoExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\AttachmentContentInterface
 */
export interface NegotiableQuoteDataAttachmentContentExtensionInterface {
}
/**
 * Attachment files content interface.
 */
export interface NegotiableQuoteDataAttachmentContentInterface {
    /**
     * Media data (base64 encoded content).
     */
    base64_encoded_data: string;
    /**
     * MIME type.
     */
    type: string;
    /**
     * File name.
     */
    name: string;
    extension_attributes?: NegotiableQuoteDataAttachmentContentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\CommentAttachmentInterface
 */
export interface NegotiableQuoteDataCommentAttachmentExtensionInterface {
}
/**
 * Interface for quote comment attachment.
 */
export interface NegotiableQuoteDataCommentAttachmentInterface {
    /**
     * Attachment ID.
     */
    attachment_id: number;
    /**
     * Comment ID.
     */
    comment_id: number;
    /**
     * File name.
     */
    file_name: string;
    /**
     * File path.
     */
    file_path: string;
    /**
     * File type.
     */
    file_type: string;
    extension_attributes?: NegotiableQuoteDataCommentAttachmentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\CommentInterface
 */
export interface NegotiableQuoteDataCommentExtensionInterface {
}
/**
 * Interface CommentInterface
 */
export interface NegotiableQuoteDataCommentInterface {
    /**
     * Comment ID.
     */
    entity_id: number;
    /**
     * Negotiable quote ID, that this comment belongs to.
     */
    parent_id: number;
    /**
     * The comment creator type.
     */
    creator_type: number;
    /**
     * Is quote was declined by seller.
     */
    is_decline: number;
    /**
     * Is quote draft flag.
     */
    is_draft: number;
    /**
     * Comment creator ID.
     */
    creator_id: number;
    /**
     * Comment.
     */
    comment: string;
    /**
     * Comment created at.
     */
    created_at: string;
    extension_attributes?: NegotiableQuoteDataCommentExtensionInterface;
    /**
     * Existing attachments.
     */
    attachments: NegotiableQuoteDataCommentAttachmentInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\CompanyQuoteConfigInterface
 */
export interface NegotiableQuoteDataCompanyQuoteConfigExtensionInterface {
}
/**
 * Interface CompanyQuoteConfigInterface
 */
export interface NegotiableQuoteDataCompanyQuoteConfigInterface {
    /**
     * Company id
     */
    company_id?: string;
    /**
     * Quote enabled for company
     */
    is_quote_enabled: boolean;
    extension_attributes?: NegotiableQuoteDataCompanyQuoteConfigExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\NegotiableQuoteInterface
 */
export interface NegotiableQuoteDataNegotiableQuoteExtensionInterface {
}
/**
 * Interface NegotiableQuoteInterface
 */
export interface NegotiableQuoteDataNegotiableQuoteInterface {
    /**
     * Negotiable quote ID.
     */
    quote_id: number;
    /**
     * Is regular quote.
     */
    is_regular_quote: boolean;
    /**
     * Negotiable quote status.
     */
    status: string;
    /**
     * Negotiated price type.
     */
    negotiated_price_type: number;
    /**
     * Negotiated price value.
     */
    negotiated_price_value: number;
    /**
     * Proposed shipping price.
     */
    shipping_price: number;
    /**
     * Negotiable quote name.
     */
    quote_name: string;
    /**
     * Expiration period.
     */
    expiration_period: string;
    /**
     * Email notification status.
     */
    email_notification_status: number;
    /**
     * Has unconfirmed changes.
     */
    has_unconfirmed_changes: boolean;
    /**
     * Shipping tax changes.
     */
    is_shipping_tax_changed: boolean;
    /**
     * Customer price changes.
     */
    is_customer_price_changed: boolean;
    /**
     * Quote notifications.
     */
    notifications: number;
    /**
     * Quote rules.
     */
    applied_rule_ids: string;
    /**
     * Is address draft.
     */
    is_address_draft: boolean;
    /**
     * Deleted products sku.
     */
    deleted_sku: string;
    /**
     * Quote creator id.
     */
    creator_id: number;
    /**
     * Quote creator type.
     */
    creator_type: number;
    /**
     * Quote original total price.
     */
    original_total_price?: number;
    /**
     * Quote original total price in base currency.
     */
    base_original_total_price?: number;
    /**
     * Quote negotiated total price.
     */
    negotiated_total_price?: number;
    /**
     * Quote negotiated total price in base currency.
     */
    base_negotiated_total_price?: number;
    extension_attributes?: NegotiableQuoteDataNegotiableQuoteExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\NegotiableQuoteItemInterface
 */
export interface NegotiableQuoteDataNegotiableQuoteItemExtensionInterface {
}
/**
 * Interface CompanyQuoteConfigInterface
 */
export interface NegotiableQuoteDataNegotiableQuoteItemInterface {
    /**
     * Quote item id
     */
    item_id: number;
    /**
     * Quote item original price
     */
    original_price: number;
    /**
     * Quote item original tax amount
     */
    original_tax_amount: number;
    /**
     * Quote item original discount amount
     */
    original_discount_amount: number;
    extension_attributes?: NegotiableQuoteDataNegotiableQuoteItemExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\NegotiableQuote\Api\Data\NegotiableQuoteItemTotalsInterface
 */
export interface NegotiableQuoteDataNegotiableQuoteItemTotalsExtensionInterface {
}
/**
 * Extension attribute for quote item totals model.
 */
export interface NegotiableQuoteDataNegotiableQuoteItemTotalsInterface {
    /**
     * Cost for quote item.
     */
    cost: number;
    /**
     * Catalog price for quote item.
     */
    catalog_price: number;
    /**
     * Catalog price for quote item in base currency.
     */
    base_catalog_price: number;
    /**
     * Catalog price with included tax for quote item.
     */
    catalog_price_incl_tax: number;
    /**
     * Catalog price with included tax for quote item in base currency.
     */
    base_catalog_price_incl_tax: number;
    /**
     * Cart price for quote item.
     */
    cart_price: number;
    /**
     * Cart price for quote item in base currency.
     */
    base_cart_price: number;
    /**
     * Tax from catalog price for quote item.
     */
    cart_tax: number;
    /**
     * Tax from catalog price for quote item in base currency.
     */
    base_cart_tax: number;
    /**
     * Cart price with included tax for quote item.
     */
    cart_price_incl_tax: number;
    /**
     * Cart price with included tax for quote item in base currency.
     */
    base_cart_price_incl_tax: number;
    extension_attributes?: NegotiableQuoteDataNegotiableQuoteItemTotalsExtensionInterface;
}
/**
 * Extension attribute for quote totals model.
 */
export interface NegotiableQuoteDataNegotiableQuoteTotalsInterface {
    /**
     * The number of different items or products in the cart.
     */
    items_count: number;
    /**
     * Negotiable quote status.
     */
    quote_status: string;
    /**
     * The cart creation date and time.
     */
    created_at: string;
    /**
     * The cart last update date and time.
     */
    updated_at: string;
    /**
     * Customer group id.
     */
    customer_group: number;
    /**
     * Base currency to quote currency rate.
     */
    base_to_quote_rate: number;
    /**
     * Total cost for quote.
     */
    cost_total: number;
    /**
     * Total cost for quote in base currency.
     */
    base_cost_total: number;
    /**
     * Original quote total.
     */
    original_total: number;
    /**
     * Original quote total in base currency.
     */
    base_original_total: number;
    /**
     * Original tax amount for quote.
     */
    original_tax: number;
    /**
     * Original tax amount for quote in base currency.
     */
    base_original_tax: number;
    /**
     * Original price with included tax for quote.
     */
    original_price_incl_tax: number;
    /**
     * Original price with included tax for quote in base currency.
     */
    base_original_price_incl_tax: number;
    /**
     * Negotiable quote type.
     */
    negotiated_price_type: number;
    /**
     * Negotiable price value for quote.
     */
    negotiated_price_value: number;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\AddressInterface
 */
export interface QuoteDataAddressExtensionInterface {
    gift_registry_id?: number;
}
/**
 * Interface AddressInterface
 */
export interface QuoteDataAddressInterface {
    /**
     * Id
     */
    id?: number;
    /**
     * Region name
     */
    region: string;
    /**
     * Region id
     */
    region_id: number;
    /**
     * Region code
     */
    region_code: string;
    /**
     * Country id
     */
    country_id: string;
    /**
     * Street
     */
    street: string[];
    /**
     * Company
     */
    company?: string;
    /**
     * Telephone number
     */
    telephone: string;
    /**
     * Fax number
     */
    fax?: string;
    /**
     * Postcode
     */
    postcode: string;
    /**
     * City name
     */
    city: string;
    /**
     * First name
     */
    firstname: string;
    /**
     * Last name
     */
    lastname: string;
    /**
     * Middle name
     */
    middlename?: string;
    /**
     * Prefix
     */
    prefix?: string;
    /**
     * Suffix
     */
    suffix?: string;
    /**
     * Vat id
     */
    vat_id?: string;
    /**
     * Customer id
     */
    customer_id?: number;
    /**
     * Billing/shipping email
     */
    email: string;
    /**
     * Same as billing flag
     */
    same_as_billing?: number;
    /**
     * Customer address id
     */
    customer_address_id?: number;
    /**
     * Save in address book flag
     */
    save_in_address_book?: number;
    extension_attributes?: QuoteDataAddressExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CartInterface
 */
export interface QuoteDataCartExtensionInterface {
    shipping_assignments?: QuoteDataShippingAssignmentInterface[];
    negotiable_quote?: NegotiableQuoteDataNegotiableQuoteInterface;
}
/**
 * Interface CartInterface
 */
export interface QuoteDataCartInterface {
    /**
     * Cart/quote ID.
     */
    id: number;
    /**
     * Cart creation date and time. Otherwise, null.
     */
    created_at?: string;
    /**
     * Cart last update date and time. Otherwise, null.
     */
    updated_at?: string;
    /**
     * Cart conversion date and time. Otherwise, null.
     */
    converted_at?: string;
    /**
     * Active status flag value. Otherwise, null.
     */
    is_active?: boolean;
    /**
     * Virtual flag value. Otherwise, null.
     */
    is_virtual?: boolean;
    /**
     * Array of items. Otherwise, null.
     */
    items?: QuoteDataCartItemInterface[];
    /**
     * Number of different items or products in the cart. Otherwise, null.
     */
    items_count?: number;
    /**
     * Total quantity of all cart items. Otherwise, null.
     */
    items_qty?: number;
    customer: CustomerDataCustomerInterface;
    billing_address?: QuoteDataAddressInterface;
    /**
     * Reserved order ID. Otherwise, null.
     */
    reserved_order_id?: number;
    /**
     * Original order ID. Otherwise, null.
     */
    orig_order_id?: number;
    currency?: QuoteDataCurrencyInterface;
    /**
     * For guest customers, false for logged in customers
     */
    customer_is_guest?: boolean;
    /**
     * Notice text
     */
    customer_note?: string;
    /**
     * Customer notification flag
     */
    customer_note_notify?: boolean;
    /**
     * Customer tax class ID.
     */
    customer_tax_class_id?: number;
    /**
     * Store identifier
     */
    store_id: number;
    extension_attributes?: QuoteDataCartExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CartItemInterface
 */
export interface QuoteDataCartItemExtensionInterface {
    negotiable_quote_item?: NegotiableQuoteDataNegotiableQuoteItemInterface;
}
/**
 * Interface CartItemInterface
 */
export interface QuoteDataCartItemInterface {
    /**
     * Item ID. Otherwise, null.
     */
    item_id?: number;
    /**
     * Product SKU. Otherwise, null.
     */
    sku?: string;
    /**
     * Product quantity.
     */
    qty: number;
    /**
     * Product name. Otherwise, null.
     */
    name?: string;
    /**
     * Product price. Otherwise, null.
     */
    price?: number;
    /**
     * Product type. Otherwise, null.
     */
    product_type?: string;
    /**
     * Quote id.
     */
    quote_id: string;
    product_option?: QuoteDataProductOptionInterface;
    extension_attributes?: QuoteDataCartItemExtensionInterface;
}
/**
 * Interface CartSearchResultsInterface
 */
export interface QuoteDataCartSearchResultsInterface {
    /**
     * Carts list.
     */
    items: QuoteDataCartInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\CurrencyInterface
 */
export interface QuoteDataCurrencyExtensionInterface {
}
/**
 * Interface CurrencyInterface
 */
export interface QuoteDataCurrencyInterface {
    /**
     * Global currency code
     */
    global_currency_code?: string;
    /**
     * Base currency code
     */
    base_currency_code?: string;
    /**
     * Store currency code
     */
    store_currency_code?: string;
    /**
     * Quote currency code
     */
    quote_currency_code?: string;
    /**
     * Store currency to base currency rate
     */
    store_to_base_rate?: number;
    /**
     * Store currency to quote currency rate
     */
    store_to_quote_rate?: number;
    /**
     * Base currency to global currency rate
     */
    base_to_global_rate?: number;
    /**
     * Base currency to quote currency rate
     */
    base_to_quote_rate?: number;
    extension_attributes?: QuoteDataCurrencyExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\PaymentInterface
 */
export interface QuoteDataPaymentExtensionInterface {
    agreement_ids?: string[];
}
/**
 * Interface PaymentInterface
 */
export interface QuoteDataPaymentInterface {
    /**
     * Purchase order number
     */
    po_number?: string;
    /**
     * Payment method code
     */
    method: string;
    /**
     * Payment additional details
     */
    additional_data?: string[];
    extension_attributes?: QuoteDataPaymentExtensionInterface;
}
/**
 * Interface PaymentMethodInterface
 */
export interface QuoteDataPaymentMethodInterface {
    /**
     * Payment method code
     */
    code: string;
    /**
     * Payment method title
     */
    title: string;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ProductOptionInterface
 */
export interface QuoteDataProductOptionExtensionInterface {
    custom_options?: CatalogDataCustomOptionInterface[];
    bundle_options?: BundleDataBundleOptionInterface[];
    configurable_item_options?: ConfigurableProductDataConfigurableItemOptionValueInterface[];
    downloadable_option?: DownloadableDataDownloadableOptionInterface;
    giftcard_item_option?: GiftCardDataGiftCardOptionInterface;
}
/**
 * Product option interface
 */
export interface QuoteDataProductOptionInterface {
    extension_attributes?: QuoteDataProductOptionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingAssignmentInterface
 */
export interface QuoteDataShippingAssignmentExtensionInterface {
}
/**
 * Interface ShippingAssignmentInterface
 */
export interface QuoteDataShippingAssignmentInterface {
    shipping: QuoteDataShippingInterface;
    items: QuoteDataCartItemInterface[];
    extension_attributes?: QuoteDataShippingAssignmentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingInterface
 */
export interface QuoteDataShippingExtensionInterface {
}
/**
 * Interface ShippingInterface
 */
export interface QuoteDataShippingInterface {
    address: QuoteDataAddressInterface;
    /**
     * Shipping method
     */
    method: string;
    extension_attributes?: QuoteDataShippingExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\ShippingMethodInterface
 */
export interface QuoteDataShippingMethodExtensionInterface {
}
/**
 * Interface ShippingMethodInterface
 */
export interface QuoteDataShippingMethodInterface {
    /**
     * Shipping carrier code.
     */
    carrier_code: string;
    /**
     * Shipping method code.
     */
    method_code: string;
    /**
     * Shipping carrier title. Otherwise, null.
     */
    carrier_title?: string;
    /**
     * Shipping method title. Otherwise, null.
     */
    method_title?: string;
    /**
     * Shipping amount in store currency.
     */
    amount: number;
    /**
     * Shipping amount in base currency.
     */
    base_amount: number;
    /**
     * The value of the availability flag for the current shipping method.
     */
    available: boolean;
    extension_attributes?: QuoteDataShippingMethodExtensionInterface;
    /**
     * Shipping Error message.
     */
    error_message: string;
    /**
     * Shipping price excl tax.
     */
    price_excl_tax: number;
    /**
     * Shipping price incl tax.
     */
    price_incl_tax: number;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalSegmentInterface
 */
export interface QuoteDataTotalSegmentExtensionInterface {
    tax_grandtotal_details?: TaxDataGrandTotalDetailsInterface[];
    gift_cards?: string;
    gw_order_id?: string;
    gw_item_ids?: string[];
    gw_allow_gift_receipt?: string;
    gw_add_card?: string;
    gw_price?: string;
    gw_base_price?: string;
    gw_items_price?: string;
    gw_items_base_price?: string;
    gw_card_price?: string;
    gw_card_base_price?: string;
    gw_base_tax_amount?: string;
    gw_tax_amount?: string;
    gw_items_base_tax_amount?: string;
    gw_items_tax_amount?: string;
    gw_card_base_tax_amount?: string;
    gw_card_tax_amount?: string;
    gw_price_incl_tax?: string;
    gw_base_price_incl_tax?: string;
    gw_card_price_incl_tax?: string;
    gw_card_base_price_incl_tax?: string;
    gw_items_price_incl_tax?: string;
    gw_items_base_price_incl_tax?: string;
}
/**
 * Interface TotalsInterface
 */
export interface QuoteDataTotalSegmentInterface {
    /**
     * Code
     */
    code: string;
    /**
     * Total title
     */
    title?: string;
    /**
     * Total value
     */
    value: number;
    /**
     * Display area code.
     */
    area?: string;
    extension_attributes?: QuoteDataTotalSegmentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsAdditionalDataInterface
 */
export interface QuoteDataTotalsAdditionalDataExtensionInterface {
    gift_messages?: GiftMessageDataMessageInterface[];
}
/**
 * Additional data for totals collection.
 */
export interface QuoteDataTotalsAdditionalDataInterface {
    extension_attributes?: QuoteDataTotalsAdditionalDataExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsInterface
 */
export interface QuoteDataTotalsExtensionInterface {
    coupon_label?: string;
    base_customer_balance_amount?: number;
    customer_balance_amount?: number;
    negotiable_quote_totals?: NegotiableQuoteDataNegotiableQuoteTotalsInterface;
    reward_points_balance?: number;
    reward_currency_amount?: number;
    base_reward_currency_amount?: number;
}
/**
 * Interface TotalsInterface
 */
export interface QuoteDataTotalsInterface {
    /**
     * Grand total in quote currency
     */
    grand_total?: number;
    /**
     * Grand total in base currency
     */
    base_grand_total?: number;
    /**
     * Subtotal in quote currency
     */
    subtotal?: number;
    /**
     * Subtotal in base currency
     */
    base_subtotal?: number;
    /**
     * Discount amount in quote currency
     */
    discount_amount?: number;
    /**
     * Discount amount in base currency
     */
    base_discount_amount?: number;
    /**
     * Subtotal in quote currency with applied discount
     */
    subtotal_with_discount?: number;
    /**
     * Subtotal in base currency with applied discount
     */
    base_subtotal_with_discount?: number;
    /**
     * Shipping amount in quote currency
     */
    shipping_amount?: number;
    /**
     * Shipping amount in base currency
     */
    base_shipping_amount?: number;
    /**
     * Shipping discount amount in quote currency
     */
    shipping_discount_amount?: number;
    /**
     * Shipping discount amount in base currency
     */
    base_shipping_discount_amount?: number;
    /**
     * Tax amount in quote currency
     */
    tax_amount?: number;
    /**
     * Tax amount in base currency
     */
    base_tax_amount?: number;
    /**
     * Item weee tax applied amount in quote currency.
     */
    weee_tax_applied_amount: number;
    /**
     * Shipping tax amount in quote currency
     */
    shipping_tax_amount?: number;
    /**
     * Shipping tax amount in base currency
     */
    base_shipping_tax_amount?: number;
    /**
     * Subtotal including tax in quote currency
     */
    subtotal_incl_tax?: number;
    /**
     * Subtotal including tax in base currency
     */
    base_subtotal_incl_tax?: number;
    /**
     * Shipping including tax in quote currency
     */
    shipping_incl_tax?: number;
    /**
     * Shipping including tax in base currency
     */
    base_shipping_incl_tax?: number;
    /**
     * Base currency code
     */
    base_currency_code?: string;
    /**
     * Quote currency code
     */
    quote_currency_code?: string;
    /**
     * Applied coupon code
     */
    coupon_code?: string;
    /**
     * Items qty
     */
    items_qty?: number;
    /**
     * Totals by items
     */
    items?: QuoteDataTotalsItemInterface[];
    /**
     * Dynamically calculated totals
     */
    total_segments: QuoteDataTotalSegmentInterface[];
    extension_attributes?: QuoteDataTotalsExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Quote\Api\Data\TotalsItemInterface
 */
export interface QuoteDataTotalsItemExtensionInterface {
    negotiable_quote_item_totals?: NegotiableQuoteDataNegotiableQuoteItemTotalsInterface;
}
/**
 * Interface TotalsItemInterface
 */
export interface QuoteDataTotalsItemInterface {
    /**
     * Item id
     */
    item_id: number;
    /**
     * Item price in quote currency.
     */
    price: number;
    /**
     * Item price in base currency.
     */
    base_price: number;
    /**
     * Item quantity.
     */
    qty: number;
    /**
     * Row total in quote currency.
     */
    row_total: number;
    /**
     * Row total in base currency.
     */
    base_row_total: number;
    /**
     * Row total with discount in quote currency. Otherwise, null.
     */
    row_total_with_discount?: number;
    /**
     * Tax amount in quote currency. Otherwise, null.
     */
    tax_amount?: number;
    /**
     * Tax amount in base currency. Otherwise, null.
     */
    base_tax_amount?: number;
    /**
     * Tax percent. Otherwise, null.
     */
    tax_percent?: number;
    /**
     * Discount amount in quote currency. Otherwise, null.
     */
    discount_amount?: number;
    /**
     * Discount amount in base currency. Otherwise, null.
     */
    base_discount_amount?: number;
    /**
     * Discount percent. Otherwise, null.
     */
    discount_percent?: number;
    /**
     * Price including tax in quote currency. Otherwise, null.
     */
    price_incl_tax?: number;
    /**
     * Price including tax in base currency. Otherwise, null.
     */
    base_price_incl_tax?: number;
    /**
     * Row total including tax in quote currency. Otherwise, null.
     */
    row_total_incl_tax?: number;
    /**
     * Row total including tax in base currency. Otherwise, null.
     */
    base_row_total_incl_tax?: number;
    /**
     * Item price in quote currency.
     */
    options: string;
    /**
     * Item weee tax applied amount in quote currency.
     */
    weee_tax_applied_amount: number;
    /**
     * Item weee tax applied in quote currency.
     */
    weee_tax_applied: string;
    extension_attributes?: QuoteDataTotalsItemExtensionInterface;
    /**
     * Product name. Otherwise, null.
     */
    name?: string;
}
/**
 * ExtensionInterface class for @see \Magento\RequisitionList\Api\Data\RequisitionListInterface
 */
export interface RequisitionListDataRequisitionListExtensionInterface {
}
/**
 * Interface RequisitionListInterface
 */
export interface RequisitionListDataRequisitionListInterface {
    /**
     * Requisition List ID
     */
    id: number;
    /**
     * Customer ID
     */
    customer_id: number;
    /**
     * Requisition List Name
     */
    name: string;
    /**
     * Requisition List Update Time
     */
    updated_at: string;
    /**
     * Requisition List Description
     */
    description: string;
    /**
     * Requisition List Items
     */
    items: RequisitionListDataRequisitionListItemInterface[];
    extension_attributes?: RequisitionListDataRequisitionListExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\RequisitionList\Api\Data\RequisitionListItemInterface
 */
export interface RequisitionListDataRequisitionListItemExtensionInterface {
}
/**
 * Interface RequisitionListItemInterface
 */
export interface RequisitionListDataRequisitionListItemInterface {
    /**
     * Requisition List ID.
     */
    id: number;
    /**
     * Product SKU.
     */
    sku: number;
    /**
     * Requisition List ID.
     */
    requisition_list_id: number;
    /**
     * Product Qty.
     */
    qty: number;
    /**
     * Requisition list item options.
     */
    options: string[];
    /**
     * Store ID.
     */
    store_id: number;
    /**
     * Added_at value.
     */
    added_at: string;
    extension_attributes?: RequisitionListDataRequisitionListItemExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Rma\Api\Data\CommentInterface
 */
export interface RmaDataCommentExtensionInterface {
}
/**
 * Interface CommentInterface
 */
export interface RmaDataCommentInterface {
    /**
     * Comment
     */
    comment: string;
    /**
     * Rma Id
     */
    rma_entity_id: number;
    /**
     * Created_at
     */
    created_at: string;
    /**
     * Entity_id
     */
    entity_id: number;
    /**
     * Is_customer_notified
     */
    customer_notified: boolean;
    /**
     * Is_visible_on_front
     */
    visible_on_front: boolean;
    /**
     * Status
     */
    status: string;
    /**
     * Is_admin
     */
    admin: boolean;
    extension_attributes?: RmaDataCommentExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * Interface CommentSearchResultInterface
 */
export interface RmaDataCommentSearchResultInterface {
    /**
     * Rma Status History list
     */
    items: RmaDataCommentInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Rma\Api\Data\ItemInterface
 */
export interface RmaDataItemExtensionInterface {
}
/**
 * Interface CategoryInterface
 */
export interface RmaDataItemInterface {
    /**
     * Id
     */
    entity_id: number;
    /**
     * RMA id
     */
    rma_entity_id: number;
    /**
     * Order_item_id
     */
    order_item_id: number;
    /**
     * Qty_requested
     */
    qty_requested: number;
    /**
     * Qty_authorized
     */
    qty_authorized: number;
    /**
     * Qty_approved
     */
    qty_approved: number;
    /**
     * Qty_returned
     */
    qty_returned: number;
    /**
     * Reason
     */
    reason: string;
    /**
     * Condition
     */
    condition: string;
    /**
     * Resolution
     */
    resolution: string;
    /**
     * Status
     */
    status: string;
    extension_attributes?: RmaDataItemExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Rma\Api\Data\RmaInterface
 */
export interface RmaDataRmaExtensionInterface {
}
/**
 * Interface RmaInterface
 */
export interface RmaDataRmaInterface {
    /**
     * Entity_id
     */
    increment_id: string;
    /**
     * Entity_id
     */
    entity_id: number;
    /**
     * Order_id
     */
    order_id: number;
    /**
     * Order_increment_id
     */
    order_increment_id: string;
    /**
     * Store_id
     */
    store_id: number;
    /**
     * Customer_id
     */
    customer_id: number;
    /**
     * Date_requested
     */
    date_requested: string;
    /**
     * Customer_custom_email
     */
    customer_custom_email: string;
    /**
     * Items
     */
    items: RmaDataItemInterface[];
    /**
     * Status
     */
    status: string;
    /**
     * Comments list
     */
    comments: RmaDataCommentInterface[];
    /**
     * Tracks list
     */
    tracks: RmaDataTrackInterface[];
    extension_attributes?: RmaDataRmaExtensionInterface;
    /**
     * Custom attributes values.
     */
    custom_attributes?: FrameworkAttributeInterface[];
}
/**
 * Interface RmaSearchResultInterface
 */
export interface RmaDataRmaSearchResultInterface {
    /**
     * Rma list
     */
    items: RmaDataRmaInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Rma\Api\Data\TrackInterface
 */
export interface RmaDataTrackExtensionInterface {
}
/**
 * Interface TrackInterface
 */
export interface RmaDataTrackInterface {
    /**
     * Entity id
     */
    entity_id: number;
    /**
     * Rma entity id
     */
    rma_entity_id: number;
    /**
     * Track number
     */
    track_number: string;
    /**
     * Carrier title
     */
    carrier_title: string;
    /**
     * Carrier code
     */
    carrier_code: string;
    extension_attributes?: RmaDataTrackExtensionInterface;
}
/**
 * Interface TrackSearchResultInterface
 */
export interface RmaDataTrackSearchResultInterface {
    /**
     * Rma list
     */
    items: RmaDataTrackInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentCreationInterface
 */
export interface SalesDataCreditmemoCommentCreationExtensionInterface {
}
/**
 * Interface CreditmemoCommentCreationInterface
 */
export interface SalesDataCreditmemoCommentCreationInterface {
    extension_attributes?: SalesDataCreditmemoCommentCreationExtensionInterface;
    /**
     * Comment.
     */
    comment: string;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCommentInterface
 */
export interface SalesDataCreditmemoCommentExtensionInterface {
}
/**
 * Credit memo comment interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
 */
export interface SalesDataCreditmemoCommentInterface {
    /**
     * Comment.
     */
    comment: string;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Credit memo ID.
     */
    entity_id?: number;
    /**
     * Is-customer-notified flag value.
     */
    is_customer_notified: number;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
    /**
     * Parent ID.
     */
    parent_id: number;
    extension_attributes?: SalesDataCreditmemoCommentExtensionInterface;
}
/**
 * Credit memo comment search result interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo usually includes comments that detail why the credit memo amount was credited to the customer.
 */
export interface SalesDataCreditmemoCommentSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataCreditmemoCommentInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoCreationArgumentsInterface
 */
export interface SalesDataCreditmemoCreationArgumentsExtensionInterface {
    return_to_stock_items?: number[];
}
/**
 * Interface CreditmemoCreationArgumentsInterface
 */
export interface SalesDataCreditmemoCreationArgumentsInterface {
    /**
     * Credit memo shipping amount.
     */
    shipping_amount?: number;
    /**
     * Credit memo positive adjustment.
     */
    adjustment_positive?: number;
    /**
     * Credit memo negative adjustment.
     */
    adjustment_negative?: number;
    extension_attributes?: SalesDataCreditmemoCreationArgumentsExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoInterface
 */
export interface SalesDataCreditmemoExtensionInterface {
    base_customer_balance_amount?: number;
    customer_balance_amount?: number;
    base_gift_cards_amount?: number;
    gift_cards_amount?: number;
    gw_base_price?: string;
    gw_price?: string;
    gw_items_base_price?: string;
    gw_items_price?: string;
    gw_card_base_price?: string;
    gw_card_price?: string;
    gw_base_tax_amount?: string;
    gw_tax_amount?: string;
    gw_items_base_tax_amount?: string;
    gw_items_tax_amount?: string;
    gw_card_base_tax_amount?: string;
    gw_card_tax_amount?: string;
}
/**
 * Credit memo interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases.
 */
export interface SalesDataCreditmemoInterface {
    /**
     * Credit memo adjustment.
     */
    adjustment?: number;
    /**
     * Credit memo negative adjustment.
     */
    adjustment_negative?: number;
    /**
     * Credit memo positive adjustment.
     */
    adjustment_positive?: number;
    /**
     * Credit memo base adjustment.
     */
    base_adjustment?: number;
    /**
     * Credit memo negative base adjustment.
     */
    base_adjustment_negative?: number;
    /**
     * Credit memo positive base adjustment.
     */
    base_adjustment_positive?: number;
    /**
     * Credit memo base currency code.
     */
    base_currency_code?: string;
    /**
     * Credit memo base discount amount.
     */
    base_discount_amount?: number;
    /**
     * Credit memo base grand total.
     */
    base_grand_total?: number;
    /**
     * Credit memo base discount tax compensation amount.
     */
    base_discount_tax_compensation_amount?: number;
    /**
     * Credit memo base shipping amount.
     */
    base_shipping_amount?: number;
    /**
     * Credit memo base shipping discount tax compensation amount.
     */
    base_shipping_discount_tax_compensation_amnt?: number;
    /**
     * Credit memo base shipping including tax.
     */
    base_shipping_incl_tax?: number;
    /**
     * Credit memo base shipping tax amount.
     */
    base_shipping_tax_amount?: number;
    /**
     * Credit memo base subtotal.
     */
    base_subtotal?: number;
    /**
     * Credit memo base subtotal including tax.
     */
    base_subtotal_incl_tax?: number;
    /**
     * Credit memo base tax amount.
     */
    base_tax_amount?: number;
    /**
     * Credit memo base-to-global rate.
     */
    base_to_global_rate?: number;
    /**
     * Credit memo base-to-order rate.
     */
    base_to_order_rate?: number;
    /**
     * Credit memo billing address ID.
     */
    billing_address_id?: number;
    /**
     * Credit memo created-at timestamp.
     */
    created_at?: string;
    /**
     * Credit memo status.
     */
    creditmemo_status?: number;
    /**
     * Credit memo discount amount.
     */
    discount_amount?: number;
    /**
     * Credit memo discount description.
     */
    discount_description?: string;
    /**
     * Credit memo email sent flag value.
     */
    email_sent?: number;
    /**
     * Credit memo ID.
     */
    entity_id?: number;
    /**
     * Credit memo global currency code.
     */
    global_currency_code?: string;
    /**
     * Credit memo grand total.
     */
    grand_total?: number;
    /**
     * Credit memo discount tax compensation amount.
     */
    discount_tax_compensation_amount?: number;
    /**
     * Credit memo increment ID.
     */
    increment_id?: string;
    /**
     * Credit memo invoice ID.
     */
    invoice_id?: number;
    /**
     * Credit memo order currency code.
     */
    order_currency_code?: string;
    /**
     * Credit memo order ID.
     */
    order_id: number;
    /**
     * Credit memo shipping address ID.
     */
    shipping_address_id?: number;
    /**
     * Credit memo shipping amount.
     */
    shipping_amount?: number;
    /**
     * Credit memo shipping discount tax compensation amount.
     */
    shipping_discount_tax_compensation_amount?: number;
    /**
     * Credit memo shipping including tax.
     */
    shipping_incl_tax?: number;
    /**
     * Credit memo shipping tax amount.
     */
    shipping_tax_amount?: number;
    /**
     * Credit memo state.
     */
    state?: number;
    /**
     * Credit memo store currency code.
     */
    store_currency_code?: string;
    /**
     * Credit memo store ID.
     */
    store_id?: number;
    /**
     * Credit memo store-to-base rate.
     */
    store_to_base_rate?: number;
    /**
     * Credit memo store-to-order rate.
     */
    store_to_order_rate?: number;
    /**
     * Credit memo subtotal.
     */
    subtotal?: number;
    /**
     * Credit memo subtotal including tax.
     */
    subtotal_incl_tax?: number;
    /**
     * Credit memo tax amount.
     */
    tax_amount?: number;
    /**
     * Credit memo transaction ID.
     */
    transaction_id?: string;
    /**
     * Credit memo updated-at timestamp.
     */
    updated_at?: string;
    /**
     * Array of credit memo items.
     */
    items: SalesDataCreditmemoItemInterface[];
    /**
     * Array of any credit memo comments. Otherwise, null.
     */
    comments?: SalesDataCreditmemoCommentInterface[];
    extension_attributes?: SalesDataCreditmemoExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemCreationInterface
 */
export interface SalesDataCreditmemoItemCreationExtensionInterface {
}
/**
 * Interface CreditmemoItemCreationInterface
 */
export interface SalesDataCreditmemoItemCreationInterface {
    extension_attributes?: SalesDataCreditmemoItemCreationExtensionInterface;
    /**
     * Order item ID.
     */
    order_item_id: number;
    /**
     * Quantity.
     */
    qty: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\CreditmemoItemInterface
 */
export interface SalesDataCreditmemoItemExtensionInterface {
}
/**
 * Credit memo item interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases. A credit memo item is an invoiced item for which a merchant creates a credit memo.
 */
export interface SalesDataCreditmemoItemInterface {
    /**
     * Additional data.
     */
    additional_data?: string;
    /**
     * The base cost for a credit memo item.
     */
    base_cost: number;
    /**
     * The base discount amount for a credit memo item.
     */
    base_discount_amount?: number;
    /**
     * The base discount tax compensation amount for a credit memo item.
     */
    base_discount_tax_compensation_amount?: number;
    /**
     * The base price for a credit memo item.
     */
    base_price: number;
    /**
     * Base price including tax.
     */
    base_price_incl_tax?: number;
    /**
     * Base row total.
     */
    base_row_total?: number;
    /**
     * Base row total including tax.
     */
    base_row_total_incl_tax?: number;
    /**
     * Base tax amount.
     */
    base_tax_amount?: number;
    /**
     * Base WEEE tax applied amount.
     */
    base_weee_tax_applied_amount?: number;
    /**
     * Base WEEE tax applied row amount.
     */
    base_weee_tax_applied_row_amnt?: number;
    /**
     * Base WEEE tax disposition.
     */
    base_weee_tax_disposition?: number;
    /**
     * Base WEEE tax row disposition.
     */
    base_weee_tax_row_disposition?: number;
    /**
     * Description.
     */
    description?: string;
    /**
     * Discount amount.
     */
    discount_amount?: number;
    /**
     * Credit memo item ID.
     */
    entity_id: number;
    /**
     * Discount tax compensation amount.
     */
    discount_tax_compensation_amount?: number;
    /**
     * Name.
     */
    name?: string;
    /**
     * Order item ID.
     */
    order_item_id: number;
    /**
     * Parent ID.
     */
    parent_id?: number;
    /**
     * Price.
     */
    price?: number;
    /**
     * Price including tax.
     */
    price_incl_tax?: number;
    /**
     * Product ID.
     */
    product_id?: number;
    /**
     * Quantity.
     */
    qty: number;
    /**
     * Row total.
     */
    row_total?: number;
    /**
     * Row total including tax.
     */
    row_total_incl_tax?: number;
    /**
     * SKU.
     */
    sku?: string;
    /**
     * Tax amount.
     */
    tax_amount?: number;
    /**
     * WEEE tax applied.
     */
    weee_tax_applied?: string;
    /**
     * WEEE tax applied amount.
     */
    weee_tax_applied_amount?: number;
    /**
     * WEEE tax applied row amount.
     */
    weee_tax_applied_row_amount?: number;
    /**
     * WEEE tax disposition.
     */
    weee_tax_disposition?: number;
    /**
     * WEEE tax row disposition.
     */
    weee_tax_row_disposition?: number;
    extension_attributes?: SalesDataCreditmemoItemExtensionInterface;
}
/**
 * Credit memo search result interface. After a customer places and pays for an order and an invoice has been issued, the merchant can create a credit memo to refund all or part of the amount paid for any returned or undelivered items. The memo restores funds to the customer account so that the customer can make future purchases.
 */
export interface SalesDataCreditmemoSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataCreditmemoInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentCreationInterface
 */
export interface SalesDataInvoiceCommentCreationExtensionInterface {
}
/**
 * Interface InvoiceCommentCreationInterface
 */
export interface SalesDataInvoiceCommentCreationInterface {
    extension_attributes?: SalesDataInvoiceCommentCreationExtensionInterface;
    /**
     * Comment.
     */
    comment: string;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCommentInterface
 */
export interface SalesDataInvoiceCommentExtensionInterface {
}
/**
 * Invoice comment interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
 */
export interface SalesDataInvoiceCommentInterface {
    /**
     * Is-customer-notified flag value.
     */
    is_customer_notified: number;
    /**
     * Parent ID.
     */
    parent_id: number;
    extension_attributes?: SalesDataInvoiceCommentExtensionInterface;
    /**
     * Comment.
     */
    comment: string;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Invoice ID.
     */
    entity_id?: number;
}
/**
 * Invoice comment search result interface. An invoice is a record of the receipt of payment for an order. An invoice can include comments that detail the invoice history.
 */
export interface SalesDataInvoiceCommentSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataInvoiceCommentInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceCreationArgumentsInterface
 */
export interface SalesDataInvoiceCreationArgumentsExtensionInterface {
}
/**
 * Interface for creation arguments for Invoice.
 */
export interface SalesDataInvoiceCreationArgumentsInterface {
    extension_attributes?: SalesDataInvoiceCreationArgumentsExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceInterface
 */
export interface SalesDataInvoiceExtensionInterface {
    base_customer_balance_amount?: number;
    customer_balance_amount?: number;
    base_gift_cards_amount?: number;
    gift_cards_amount?: number;
    gw_base_price?: string;
    gw_price?: string;
    gw_items_base_price?: string;
    gw_items_price?: string;
    gw_card_base_price?: string;
    gw_card_price?: string;
    gw_base_tax_amount?: string;
    gw_tax_amount?: string;
    gw_items_base_tax_amount?: string;
    gw_items_tax_amount?: string;
    gw_card_base_tax_amount?: string;
    gw_card_tax_amount?: string;
}
/**
 * Invoice interface. An invoice is a record of the receipt of payment for an order.
 */
export interface SalesDataInvoiceInterface {
    /**
     * Base currency code.
     */
    base_currency_code?: string;
    /**
     * Base discount amount.
     */
    base_discount_amount?: number;
    /**
     * Base grand total.
     */
    base_grand_total?: number;
    /**
     * Base discount tax compensation amount.
     */
    base_discount_tax_compensation_amount?: number;
    /**
     * Base shipping amount.
     */
    base_shipping_amount?: number;
    /**
     * Base shipping discount tax compensation amount.
     */
    base_shipping_discount_tax_compensation_amnt?: number;
    /**
     * Base shipping including tax.
     */
    base_shipping_incl_tax?: number;
    /**
     * Base shipping tax amount.
     */
    base_shipping_tax_amount?: number;
    /**
     * Base subtotal.
     */
    base_subtotal?: number;
    /**
     * Base subtotal including tax.
     */
    base_subtotal_incl_tax?: number;
    /**
     * Base tax amount.
     */
    base_tax_amount?: number;
    /**
     * Base total refunded.
     */
    base_total_refunded?: number;
    /**
     * Base-to-global rate.
     */
    base_to_global_rate?: number;
    /**
     * Base-to-order rate.
     */
    base_to_order_rate?: number;
    /**
     * Billing address ID.
     */
    billing_address_id?: number;
    /**
     * Can void flag value.
     */
    can_void_flag?: number;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Discount amount.
     */
    discount_amount?: number;
    /**
     * Discount description.
     */
    discount_description?: string;
    /**
     * Email-sent flag value.
     */
    email_sent?: number;
    /**
     * Invoice ID.
     */
    entity_id?: number;
    /**
     * Global currency code.
     */
    global_currency_code?: string;
    /**
     * Grand total.
     */
    grand_total?: number;
    /**
     * Discount tax compensation amount.
     */
    discount_tax_compensation_amount?: number;
    /**
     * Increment ID.
     */
    increment_id?: string;
    /**
     * Is-used-for-refund flag value.
     */
    is_used_for_refund?: number;
    /**
     * Order currency code.
     */
    order_currency_code?: string;
    /**
     * Order ID.
     */
    order_id: number;
    /**
     * Shipping address ID.
     */
    shipping_address_id?: number;
    /**
     * Shipping amount.
     */
    shipping_amount?: number;
    /**
     * Shipping discount tax compensation amount.
     */
    shipping_discount_tax_compensation_amount?: number;
    /**
     * Shipping including tax.
     */
    shipping_incl_tax?: number;
    /**
     * Shipping tax amount.
     */
    shipping_tax_amount?: number;
    /**
     * State.
     */
    state?: number;
    /**
     * Store currency code.
     */
    store_currency_code?: string;
    /**
     * Store ID.
     */
    store_id?: number;
    /**
     * Store-to-base rate.
     */
    store_to_base_rate?: number;
    /**
     * Store-to-order rate.
     */
    store_to_order_rate?: number;
    /**
     * Subtotal.
     */
    subtotal?: number;
    /**
     * Subtotal including tax.
     */
    subtotal_incl_tax?: number;
    /**
     * Tax amount.
     */
    tax_amount?: number;
    /**
     * Total quantity.
     */
    total_qty: number;
    /**
     * Transaction ID.
     */
    transaction_id?: string;
    /**
     * Updated-at timestamp.
     */
    updated_at?: string;
    /**
     * Array of invoice items.
     */
    items: SalesDataInvoiceItemInterface[];
    /**
     * Array of any invoice comments. Otherwise, null.
     */
    comments?: SalesDataInvoiceCommentInterface[];
    extension_attributes?: SalesDataInvoiceExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemCreationInterface
 */
export interface SalesDataInvoiceItemCreationExtensionInterface {
}
/**
 * Input argument for invoice creation Interface InvoiceItemCreationInterface
 */
export interface SalesDataInvoiceItemCreationInterface {
    extension_attributes?: SalesDataInvoiceItemCreationExtensionInterface;
    /**
     * Order item ID.
     */
    order_item_id: number;
    /**
     * Quantity.
     */
    qty: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\InvoiceItemInterface
 */
export interface SalesDataInvoiceItemExtensionInterface {
}
/**
 * Invoice item interface. An invoice is a record of the receipt of payment for an order. An invoice item is a purchased item in an invoice.
 */
export interface SalesDataInvoiceItemInterface {
    /**
     * Additional data.
     */
    additional_data?: string;
    /**
     * Base cost.
     */
    base_cost?: number;
    /**
     * Base discount amount.
     */
    base_discount_amount?: number;
    /**
     * Base discount tax compensation amount.
     */
    base_discount_tax_compensation_amount?: number;
    /**
     * Base price.
     */
    base_price?: number;
    /**
     * Base price including tax.
     */
    base_price_incl_tax?: number;
    /**
     * Base row total.
     */
    base_row_total?: number;
    /**
     * Base row total including tax.
     */
    base_row_total_incl_tax?: number;
    /**
     * Base tax amount.
     */
    base_tax_amount?: number;
    /**
     * Description.
     */
    description?: string;
    /**
     * Discount amount.
     */
    discount_amount?: number;
    /**
     * Invoice item ID.
     */
    entity_id?: number;
    /**
     * Discount tax compensation amount.
     */
    discount_tax_compensation_amount?: number;
    /**
     * Name.
     */
    name?: string;
    /**
     * Parent ID.
     */
    parent_id?: number;
    /**
     * Price.
     */
    price?: number;
    /**
     * Price including tax.
     */
    price_incl_tax?: number;
    /**
     * Product ID.
     */
    product_id?: number;
    /**
     * Row total.
     */
    row_total?: number;
    /**
     * Row total including tax.
     */
    row_total_incl_tax?: number;
    /**
     * SKU.
     */
    sku: string;
    /**
     * Tax amount.
     */
    tax_amount?: number;
    extension_attributes?: SalesDataInvoiceItemExtensionInterface;
    /**
     * Order item ID.
     */
    order_item_id: number;
    /**
     * Quantity.
     */
    qty: number;
}
/**
 * Invoice search result interface. An invoice is a record of the receipt of payment for an order.
 */
export interface SalesDataInvoiceSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataInvoiceInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderAddressInterface
 */
export interface SalesDataOrderAddressExtensionInterface {
}
/**
 * Order address interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderAddressInterface {
    /**
     * Address type.
     */
    address_type: string;
    /**
     * City.
     */
    city: string;
    /**
     * Company.
     */
    company?: string;
    /**
     * Country ID.
     */
    country_id: string;
    /**
     * Country address ID.
     */
    customer_address_id?: number;
    /**
     * Customer ID.
     */
    customer_id?: number;
    /**
     * Email address.
     */
    email?: string;
    /**
     * Order address ID.
     */
    entity_id?: number;
    /**
     * Fax number.
     */
    fax?: string;
    /**
     * First name.
     */
    firstname: string;
    /**
     * Last name.
     */
    lastname: string;
    /**
     * Middle name.
     */
    middlename?: string;
    /**
     * Parent ID.
     */
    parent_id?: number;
    /**
     * Postal code.
     */
    postcode: string;
    /**
     * Prefix.
     */
    prefix?: string;
    /**
     * Region.
     */
    region?: string;
    /**
     * Region code.
     */
    region_code?: string;
    /**
     * Region ID.
     */
    region_id?: number;
    /**
     * Array of any street values. Otherwise, null.
     */
    street?: string[];
    /**
     * Suffix.
     */
    suffix?: string;
    /**
     * Telephone number.
     */
    telephone: string;
    /**
     * VAT ID.
     */
    vat_id?: string;
    /**
     * VAT-is-valid flag value.
     */
    vat_is_valid?: number;
    /**
     * VAT request date.
     */
    vat_request_date?: string;
    /**
     * VAT request ID.
     */
    vat_request_id?: string;
    /**
     * VAT-request-success flag value.
     */
    vat_request_success?: number;
    extension_attributes?: SalesDataOrderAddressExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderInterface
 */
export interface SalesDataOrderExtensionInterface {
    shipping_assignments?: SalesDataShippingAssignmentInterface[];
    applied_taxes?: TaxDataOrderTaxDetailsAppliedTaxInterface[];
    item_applied_taxes?: TaxDataOrderTaxDetailsItemInterface[];
    converting_from_quote?: boolean;
    company_order_attributes?: CompanyDataCompanyOrderInterface;
    base_customer_balance_amount?: number;
    customer_balance_amount?: number;
    base_customer_balance_invoiced?: number;
    customer_balance_invoiced?: number;
    base_customer_balance_refunded?: number;
    customer_balance_refunded?: number;
    base_customer_balance_total_refunded?: number;
    customer_balance_total_refunded?: number;
    gift_cards?: GiftCardAccountDataGiftCardInterface[];
    base_gift_cards_amount?: number;
    gift_cards_amount?: number;
    base_gift_cards_invoiced?: number;
    gift_cards_invoiced?: number;
    base_gift_cards_refunded?: number;
    gift_cards_refunded?: number;
    gift_message?: GiftMessageDataMessageInterface;
    gw_id?: string;
    gw_allow_gift_receipt?: string;
    gw_add_card?: string;
    gw_base_price?: string;
    gw_price?: string;
    gw_items_base_price?: string;
    gw_items_price?: string;
    gw_card_base_price?: string;
    gw_card_price?: string;
    gw_base_tax_amount?: string;
    gw_tax_amount?: string;
    gw_items_base_tax_amount?: string;
    gw_items_tax_amount?: string;
    gw_card_base_tax_amount?: string;
    gw_card_tax_amount?: string;
    gw_base_price_incl_tax?: string;
    gw_price_incl_tax?: string;
    gw_items_base_price_incl_tax?: string;
    gw_items_price_incl_tax?: string;
    gw_card_base_price_incl_tax?: string;
    gw_card_price_incl_tax?: string;
    gw_base_price_invoiced?: string;
    gw_price_invoiced?: string;
    gw_items_base_price_invoiced?: string;
    gw_items_price_invoiced?: string;
    gw_card_base_price_invoiced?: string;
    gw_card_price_invoiced?: string;
    gw_base_tax_amount_invoiced?: string;
    gw_tax_amount_invoiced?: string;
    gw_items_base_tax_invoiced?: string;
    gw_items_tax_invoiced?: string;
    gw_card_base_tax_invoiced?: string;
    gw_card_tax_invoiced?: string;
    gw_base_price_refunded?: string;
    gw_price_refunded?: string;
    gw_items_base_price_refunded?: string;
    gw_items_price_refunded?: string;
    gw_card_base_price_refunded?: string;
    gw_card_price_refunded?: string;
    gw_base_tax_amount_refunded?: string;
    gw_tax_amount_refunded?: string;
    gw_items_base_tax_refunded?: string;
    gw_items_tax_refunded?: string;
    gw_card_base_tax_refunded?: string;
    gw_card_tax_refunded?: string;
}
/**
 * Order interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderInterface {
    /**
     * Negative adjustment value.
     */
    adjustment_negative?: number;
    /**
     * Positive adjustment value.
     */
    adjustment_positive?: number;
    /**
     * Applied rule IDs.
     */
    applied_rule_ids?: string;
    /**
     * Base negative adjustment value.
     */
    base_adjustment_negative?: number;
    /**
     * Base positive adjustment value.
     */
    base_adjustment_positive?: number;
    /**
     * Base currency code.
     */
    base_currency_code?: string;
    /**
     * Base discount amount.
     */
    base_discount_amount?: number;
    /**
     * Base discount canceled.
     */
    base_discount_canceled?: number;
    /**
     * Base discount invoiced.
     */
    base_discount_invoiced?: number;
    /**
     * Base discount refunded.
     */
    base_discount_refunded?: number;
    /**
     * Base grand total.
     */
    base_grand_total: number;
    /**
     * Base discount tax compensation amount.
     */
    base_discount_tax_compensation_amount?: number;
    /**
     * Base discount tax compensation invoiced.
     */
    base_discount_tax_compensation_invoiced?: number;
    /**
     * Base discount tax compensation refunded.
     */
    base_discount_tax_compensation_refunded?: number;
    /**
     * Base shipping amount.
     */
    base_shipping_amount?: number;
    /**
     * Base shipping canceled.
     */
    base_shipping_canceled?: number;
    /**
     * Base shipping discount amount.
     */
    base_shipping_discount_amount?: number;
    /**
     * Base shipping discount tax compensation amount.
     */
    base_shipping_discount_tax_compensation_amnt?: number;
    /**
     * Base shipping including tax.
     */
    base_shipping_incl_tax?: number;
    /**
     * Base shipping invoiced.
     */
    base_shipping_invoiced?: number;
    /**
     * Base shipping refunded.
     */
    base_shipping_refunded?: number;
    /**
     * Base shipping tax amount.
     */
    base_shipping_tax_amount?: number;
    /**
     * Base shipping tax refunded.
     */
    base_shipping_tax_refunded?: number;
    /**
     * Base subtotal.
     */
    base_subtotal?: number;
    /**
     * Base subtotal canceled.
     */
    base_subtotal_canceled?: number;
    /**
     * Base subtotal including tax.
     */
    base_subtotal_incl_tax?: number;
    /**
     * Base subtotal invoiced.
     */
    base_subtotal_invoiced?: number;
    /**
     * Base subtotal refunded.
     */
    base_subtotal_refunded?: number;
    /**
     * Base tax amount.
     */
    base_tax_amount?: number;
    /**
     * Base tax canceled.
     */
    base_tax_canceled?: number;
    /**
     * Base tax invoiced.
     */
    base_tax_invoiced?: number;
    /**
     * Base tax refunded.
     */
    base_tax_refunded?: number;
    /**
     * Base total canceled.
     */
    base_total_canceled?: number;
    /**
     * Base total due.
     */
    base_total_due?: number;
    /**
     * Base total invoiced.
     */
    base_total_invoiced?: number;
    /**
     * Base total invoiced cost.
     */
    base_total_invoiced_cost?: number;
    /**
     * Base total offline refunded.
     */
    base_total_offline_refunded?: number;
    /**
     * Base total online refunded.
     */
    base_total_online_refunded?: number;
    /**
     * Base total paid.
     */
    base_total_paid?: number;
    /**
     * Base total quantity ordered.
     */
    base_total_qty_ordered?: number;
    /**
     * Base total refunded.
     */
    base_total_refunded?: number;
    /**
     * Base-to-global rate.
     */
    base_to_global_rate?: number;
    /**
     * Base-to-order rate.
     */
    base_to_order_rate?: number;
    /**
     * Billing address ID.
     */
    billing_address_id?: number;
    /**
     * Can-ship-partially flag value.
     */
    can_ship_partially?: number;
    /**
     * Can-ship-partially-item flag value.
     */
    can_ship_partially_item?: number;
    /**
     * Coupon code.
     */
    coupon_code?: string;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Customer date-of-birth (DOB).
     */
    customer_dob?: string;
    /**
     * Customer email address.
     */
    customer_email: string;
    /**
     * Customer first name.
     */
    customer_firstname?: string;
    /**
     * Customer gender.
     */
    customer_gender?: number;
    /**
     * Customer group ID.
     */
    customer_group_id?: number;
    /**
     * Customer ID.
     */
    customer_id?: number;
    /**
     * Customer-is-guest flag value.
     */
    customer_is_guest?: number;
    /**
     * Customer last name.
     */
    customer_lastname?: string;
    /**
     * Customer middle name.
     */
    customer_middlename?: string;
    /**
     * Customer note.
     */
    customer_note?: string;
    /**
     * Customer-note-notify flag value.
     */
    customer_note_notify?: number;
    /**
     * Customer prefix.
     */
    customer_prefix?: string;
    /**
     * Customer suffix.
     */
    customer_suffix?: string;
    /**
     * Customer value-added tax (VAT).
     */
    customer_taxvat?: string;
    /**
     * Discount amount.
     */
    discount_amount?: number;
    /**
     * Discount canceled.
     */
    discount_canceled?: number;
    /**
     * Discount description.
     */
    discount_description?: string;
    /**
     * Discount invoiced.
     */
    discount_invoiced?: number;
    /**
     * Discount refunded amount.
     */
    discount_refunded?: number;
    /**
     * Edit increment value.
     */
    edit_increment?: number;
    /**
     * Email-sent flag value.
     */
    email_sent?: number;
    /**
     * Order ID.
     */
    entity_id?: number;
    /**
     * External customer ID.
     */
    ext_customer_id?: string;
    /**
     * External order ID.
     */
    ext_order_id?: string;
    /**
     * Forced-shipment-with-invoice flag value.
     */
    forced_shipment_with_invoice?: number;
    /**
     * Global currency code.
     */
    global_currency_code?: string;
    /**
     * Grand total.
     */
    grand_total: number;
    /**
     * Discount tax compensation amount.
     */
    discount_tax_compensation_amount?: number;
    /**
     * Discount tax compensation invoiced amount.
     */
    discount_tax_compensation_invoiced?: number;
    /**
     * Discount tax compensation refunded amount.
     */
    discount_tax_compensation_refunded?: number;
    /**
     * Hold before state.
     */
    hold_before_state?: string;
    /**
     * Hold before status.
     */
    hold_before_status?: string;
    /**
     * Increment ID.
     */
    increment_id?: string;
    /**
     * Is-virtual flag value.
     */
    is_virtual?: number;
    /**
     * Order currency code.
     */
    order_currency_code?: string;
    /**
     * Original increment ID.
     */
    original_increment_id?: string;
    /**
     * Payment authorization amount.
     */
    payment_authorization_amount?: number;
    /**
     * Payment authorization expiration date.
     */
    payment_auth_expiration?: number;
    /**
     * Protect code.
     */
    protect_code?: string;
    /**
     * Quote address ID.
     */
    quote_address_id?: number;
    /**
     * Quote ID.
     */
    quote_id?: number;
    /**
     * Relation child ID.
     */
    relation_child_id?: string;
    /**
     * Relation child real ID.
     */
    relation_child_real_id?: string;
    /**
     * Relation parent ID.
     */
    relation_parent_id?: string;
    /**
     * Relation parent real ID.
     */
    relation_parent_real_id?: string;
    /**
     * Remote IP address.
     */
    remote_ip?: string;
    /**
     * Shipping amount.
     */
    shipping_amount?: number;
    /**
     * Shipping canceled amount.
     */
    shipping_canceled?: number;
    /**
     * Shipping description.
     */
    shipping_description?: string;
    /**
     * Shipping discount amount.
     */
    shipping_discount_amount?: number;
    /**
     * Shipping discount tax compensation amount.
     */
    shipping_discount_tax_compensation_amount?: number;
    /**
     * Shipping including tax amount.
     */
    shipping_incl_tax?: number;
    /**
     * Shipping invoiced amount.
     */
    shipping_invoiced?: number;
    /**
     * Shipping refunded amount.
     */
    shipping_refunded?: number;
    /**
     * Shipping tax amount.
     */
    shipping_tax_amount?: number;
    /**
     * Shipping tax refunded amount.
     */
    shipping_tax_refunded?: number;
    /**
     * State.
     */
    state?: string;
    /**
     * Status.
     */
    status?: string;
    /**
     * Store currency code.
     */
    store_currency_code?: string;
    /**
     * Store ID.
     */
    store_id?: number;
    /**
     * Store name.
     */
    store_name?: string;
    /**
     * Store-to-base rate.
     */
    store_to_base_rate?: number;
    /**
     * Store-to-order rate.
     */
    store_to_order_rate?: number;
    /**
     * Subtotal.
     */
    subtotal?: number;
    /**
     * Subtotal canceled amount.
     */
    subtotal_canceled?: number;
    /**
     * Subtotal including tax amount.
     */
    subtotal_incl_tax?: number;
    /**
     * Subtotal invoiced amount.
     */
    subtotal_invoiced?: number;
    /**
     * Subtotal refunded amount.
     */
    subtotal_refunded?: number;
    /**
     * Tax amount.
     */
    tax_amount?: number;
    /**
     * Tax canceled amount.
     */
    tax_canceled?: number;
    /**
     * Tax invoiced amount.
     */
    tax_invoiced?: number;
    /**
     * Tax refunded amount.
     */
    tax_refunded?: number;
    /**
     * Total canceled.
     */
    total_canceled?: number;
    /**
     * Total due.
     */
    total_due?: number;
    /**
     * Total invoiced amount.
     */
    total_invoiced?: number;
    /**
     * Total item count.
     */
    total_item_count?: number;
    /**
     * Total offline refunded amount.
     */
    total_offline_refunded?: number;
    /**
     * Total online refunded amount.
     */
    total_online_refunded?: number;
    /**
     * Total paid.
     */
    total_paid?: number;
    /**
     * Total quantity ordered.
     */
    total_qty_ordered?: number;
    /**
     * Total amount refunded.
     */
    total_refunded?: number;
    /**
     * Updated-at timestamp.
     */
    updated_at?: string;
    /**
     * Weight.
     */
    weight?: number;
    /**
     * X-Forwarded-For field value.
     */
    x_forwarded_for?: string;
    /**
     * Array of items.
     */
    items: SalesDataOrderItemInterface[];
    billing_address?: SalesDataOrderAddressInterface;
    payment?: SalesDataOrderPaymentInterface;
    /**
     * Array of status histories.
     */
    status_histories?: SalesDataOrderStatusHistoryInterface[];
    extension_attributes?: SalesDataOrderExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderItemInterface
 */
export interface SalesDataOrderItemExtensionInterface {
    gift_message?: GiftMessageDataMessageInterface;
    gw_id?: string;
    gw_base_price?: string;
    gw_price?: string;
    gw_base_tax_amount?: string;
    gw_tax_amount?: string;
    gw_base_price_invoiced?: string;
    gw_price_invoiced?: string;
    gw_base_tax_amount_invoiced?: string;
    gw_tax_amount_invoiced?: string;
    gw_base_price_refunded?: string;
    gw_price_refunded?: string;
    gw_base_tax_amount_refunded?: string;
    gw_tax_amount_refunded?: string;
}
/**
 * Order item interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderItemInterface {
    /**
     * Additional data.
     */
    additional_data?: string;
    /**
     * Amount refunded.
     */
    amount_refunded?: number;
    /**
     * Applied rule IDs.
     */
    applied_rule_ids?: string;
    /**
     * Base amount refunded.
     */
    base_amount_refunded?: number;
    /**
     * Base cost.
     */
    base_cost?: number;
    /**
     * Base discount amount.
     */
    base_discount_amount?: number;
    /**
     * Base discount invoiced.
     */
    base_discount_invoiced?: number;
    /**
     * Base discount refunded.
     */
    base_discount_refunded?: number;
    /**
     * Base discount tax compensation amount.
     */
    base_discount_tax_compensation_amount?: number;
    /**
     * Base discount tax compensation invoiced.
     */
    base_discount_tax_compensation_invoiced?: number;
    /**
     * Base discount tax compensation refunded.
     */
    base_discount_tax_compensation_refunded?: number;
    /**
     * Base original price.
     */
    base_original_price?: number;
    /**
     * Base price.
     */
    base_price?: number;
    /**
     * Base price including tax.
     */
    base_price_incl_tax?: number;
    /**
     * Base row invoiced.
     */
    base_row_invoiced?: number;
    /**
     * Base row total.
     */
    base_row_total?: number;
    /**
     * Base row total including tax.
     */
    base_row_total_incl_tax?: number;
    /**
     * Base tax amount.
     */
    base_tax_amount?: number;
    /**
     * Base tax before discount.
     */
    base_tax_before_discount?: number;
    /**
     * Base tax invoiced.
     */
    base_tax_invoiced?: number;
    /**
     * Base tax refunded.
     */
    base_tax_refunded?: number;
    /**
     * Base WEEE tax applied amount.
     */
    base_weee_tax_applied_amount?: number;
    /**
     * Base WEEE tax applied row amount.
     */
    base_weee_tax_applied_row_amnt?: number;
    /**
     * Base WEEE tax disposition.
     */
    base_weee_tax_disposition?: number;
    /**
     * Base WEEE tax row disposition.
     */
    base_weee_tax_row_disposition?: number;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Description.
     */
    description?: string;
    /**
     * Discount amount.
     */
    discount_amount?: number;
    /**
     * Discount invoiced.
     */
    discount_invoiced?: number;
    /**
     * Discount percent.
     */
    discount_percent?: number;
    /**
     * Discount refunded.
     */
    discount_refunded?: number;
    /**
     * Event ID.
     */
    event_id?: number;
    /**
     * External order item ID.
     */
    ext_order_item_id?: string;
    /**
     * Free-shipping flag value.
     */
    free_shipping?: number;
    /**
     * GW base price.
     */
    gw_base_price?: number;
    /**
     * GW base price invoiced.
     */
    gw_base_price_invoiced?: number;
    /**
     * GW base price refunded.
     */
    gw_base_price_refunded?: number;
    /**
     * GW base tax amount.
     */
    gw_base_tax_amount?: number;
    /**
     * GW base tax amount invoiced.
     */
    gw_base_tax_amount_invoiced?: number;
    /**
     * GW base tax amount refunded.
     */
    gw_base_tax_amount_refunded?: number;
    /**
     * GW ID.
     */
    gw_id?: number;
    /**
     * GW price.
     */
    gw_price?: number;
    /**
     * GW price invoiced.
     */
    gw_price_invoiced?: number;
    /**
     * GW price refunded.
     */
    gw_price_refunded?: number;
    /**
     * GW tax amount.
     */
    gw_tax_amount?: number;
    /**
     * GW tax amount invoiced.
     */
    gw_tax_amount_invoiced?: number;
    /**
     * GW tax amount refunded.
     */
    gw_tax_amount_refunded?: number;
    /**
     * Discount tax compensation amount.
     */
    discount_tax_compensation_amount?: number;
    /**
     * Discount tax compensation canceled.
     */
    discount_tax_compensation_canceled?: number;
    /**
     * Discount tax compensation invoiced.
     */
    discount_tax_compensation_invoiced?: number;
    /**
     * Discount tax compensation refunded.
     */
    discount_tax_compensation_refunded?: number;
    /**
     * Is-quantity-decimal flag value.
     */
    is_qty_decimal?: number;
    /**
     * Is-virtual flag value.
     */
    is_virtual?: number;
    /**
     * Item ID.
     */
    item_id?: number;
    /**
     * Locked DO invoice flag value.
     */
    locked_do_invoice?: number;
    /**
     * Locked DO ship flag value.
     */
    locked_do_ship?: number;
    /**
     * Name.
     */
    name?: string;
    /**
     * No-discount flag value.
     */
    no_discount?: number;
    /**
     * Order ID.
     */
    order_id?: number;
    /**
     * Original price.
     */
    original_price?: number;
    /**
     * Parent item ID.
     */
    parent_item_id?: number;
    /**
     * Price.
     */
    price?: number;
    /**
     * Price including tax.
     */
    price_incl_tax?: number;
    /**
     * Product ID.
     */
    product_id?: number;
    /**
     * Product type.
     */
    product_type?: string;
    /**
     * Quantity backordered.
     */
    qty_backordered?: number;
    /**
     * Quantity canceled.
     */
    qty_canceled?: number;
    /**
     * Quantity invoiced.
     */
    qty_invoiced?: number;
    /**
     * Quantity ordered.
     */
    qty_ordered?: number;
    /**
     * Quantity refunded.
     */
    qty_refunded?: number;
    /**
     * Quantity returned.
     */
    qty_returned?: number;
    /**
     * Quantity shipped.
     */
    qty_shipped?: number;
    /**
     * Quote item ID.
     */
    quote_item_id?: number;
    /**
     * Row invoiced.
     */
    row_invoiced?: number;
    /**
     * Row total.
     */
    row_total?: number;
    /**
     * Row total including tax.
     */
    row_total_incl_tax?: number;
    /**
     * Row weight.
     */
    row_weight?: number;
    /**
     * SKU.
     */
    sku: string;
    /**
     * Store ID.
     */
    store_id?: number;
    /**
     * Tax amount.
     */
    tax_amount?: number;
    /**
     * Tax before discount.
     */
    tax_before_discount?: number;
    /**
     * Tax canceled.
     */
    tax_canceled?: number;
    /**
     * Tax invoiced.
     */
    tax_invoiced?: number;
    /**
     * Tax percent.
     */
    tax_percent?: number;
    /**
     * Tax refunded.
     */
    tax_refunded?: number;
    /**
     * Updated-at timestamp.
     */
    updated_at?: string;
    /**
     * WEEE tax applied.
     */
    weee_tax_applied?: string;
    /**
     * WEEE tax applied amount.
     */
    weee_tax_applied_amount?: number;
    /**
     * WEEE tax applied row amount.
     */
    weee_tax_applied_row_amount?: number;
    /**
     * WEEE tax disposition.
     */
    weee_tax_disposition?: number;
    /**
     * WEEE tax row disposition.
     */
    weee_tax_row_disposition?: number;
    /**
     * Weight.
     */
    weight?: number;
    parent_item?: SalesDataOrderItemInterface;
    product_option?: CatalogDataProductOptionInterface;
    extension_attributes?: SalesDataOrderItemExtensionInterface;
}
/**
 * Order item search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderItemSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataOrderItemInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderPaymentInterface
 */
export interface SalesDataOrderPaymentExtensionInterface {
    vault_payment_token?: VaultDataPaymentTokenInterface;
}
/**
 * Order payment interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderPaymentInterface {
    /**
     * Account status.
     */
    account_status: string;
    /**
     * Additional data.
     */
    additional_data?: string;
    /**
     * Array of additional information.
     */
    additional_information: string[];
    /**
     * Address status.
     */
    address_status?: string;
    /**
     * Amount authorized.
     */
    amount_authorized?: number;
    /**
     * Amount canceled.
     */
    amount_canceled?: number;
    /**
     * Amount ordered.
     */
    amount_ordered?: number;
    /**
     * Amount paid.
     */
    amount_paid?: number;
    /**
     * Amount refunded.
     */
    amount_refunded?: number;
    /**
     * Anet transaction method.
     */
    anet_trans_method?: string;
    /**
     * Base amount authorized.
     */
    base_amount_authorized?: number;
    /**
     * Base amount canceled.
     */
    base_amount_canceled?: number;
    /**
     * Base amount ordered.
     */
    base_amount_ordered?: number;
    /**
     * Base amount paid.
     */
    base_amount_paid?: number;
    /**
     * Base amount paid online.
     */
    base_amount_paid_online?: number;
    /**
     * Base amount refunded.
     */
    base_amount_refunded?: number;
    /**
     * Base amount refunded online.
     */
    base_amount_refunded_online?: number;
    /**
     * Base shipping amount.
     */
    base_shipping_amount?: number;
    /**
     * Base shipping captured amount.
     */
    base_shipping_captured?: number;
    /**
     * Base shipping refunded amount.
     */
    base_shipping_refunded?: number;
    /**
     * Credit card approval.
     */
    cc_approval?: string;
    /**
     * Credit card avs status.
     */
    cc_avs_status?: string;
    /**
     * Credit card CID status.
     */
    cc_cid_status?: string;
    /**
     * Credit card debug request body.
     */
    cc_debug_request_body?: string;
    /**
     * Credit card debug response body.
     */
    cc_debug_response_body?: string;
    /**
     * Credit card debug response serialized.
     */
    cc_debug_response_serialized?: string;
    /**
     * Credit card expiration month.
     */
    cc_exp_month?: string;
    /**
     * Credit card expiration year.
     */
    cc_exp_year?: string;
    /**
     * Last four digits of the credit card.
     */
    cc_last4: string;
    /**
     * Encrypted credit card number.
     */
    cc_number_enc?: string;
    /**
     * Credit card number.
     */
    cc_owner?: string;
    /**
     * Credit card secure verify.
     */
    cc_secure_verify?: string;
    /**
     * Credit card SS issue.
     */
    cc_ss_issue?: string;
    /**
     * Credit card SS start month.
     */
    cc_ss_start_month?: string;
    /**
     * Credit card SS start year.
     */
    cc_ss_start_year?: string;
    /**
     * Credit card status.
     */
    cc_status?: string;
    /**
     * Credit card status description.
     */
    cc_status_description?: string;
    /**
     * Credit card transaction ID.
     */
    cc_trans_id?: string;
    /**
     * Credit card type.
     */
    cc_type?: string;
    /**
     * eCheck account name.
     */
    echeck_account_name?: string;
    /**
     * eCheck account type.
     */
    echeck_account_type?: string;
    /**
     * eCheck bank name.
     */
    echeck_bank_name?: string;
    /**
     * eCheck routing number.
     */
    echeck_routing_number?: string;
    /**
     * eCheck type.
     */
    echeck_type?: string;
    /**
     * Entity ID.
     */
    entity_id?: number;
    /**
     * Last transaction ID.
     */
    last_trans_id?: string;
    /**
     * Method.
     */
    method: string;
    /**
     * Parent ID.
     */
    parent_id?: number;
    /**
     * PO number.
     */
    po_number?: string;
    /**
     * Protection eligibility.
     */
    protection_eligibility?: string;
    /**
     * Quote payment ID.
     */
    quote_payment_id?: number;
    /**
     * Shipping amount.
     */
    shipping_amount?: number;
    /**
     * Shipping captured.
     */
    shipping_captured?: number;
    /**
     * Shipping refunded.
     */
    shipping_refunded?: number;
    extension_attributes?: SalesDataOrderPaymentExtensionInterface;
}
/**
 * Order search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataOrderInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\OrderStatusHistoryInterface
 */
export interface SalesDataOrderStatusHistoryExtensionInterface {
}
/**
 * Order status history interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderStatusHistoryInterface {
    /**
     * Comment.
     */
    comment: string;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Order status history ID.
     */
    entity_id?: number;
    /**
     * Entity name.
     */
    entity_name?: string;
    /**
     * Is-customer-notified flag value.
     */
    is_customer_notified: number;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
    /**
     * Parent ID.
     */
    parent_id: number;
    /**
     * Status.
     */
    status?: string;
    extension_attributes?: SalesDataOrderStatusHistoryExtensionInterface;
}
/**
 * Order status history search result interface. An order is a document that a web store issues to a customer. Magento generates a sales order that lists the product items, billing and shipping addresses, and shipping and payment methods. A corresponding external document, known as a purchase order, is emailed to the customer.
 */
export interface SalesDataOrderStatusHistorySearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataOrderStatusHistoryInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentCreationInterface
 */
export interface SalesDataShipmentCommentCreationExtensionInterface {
}
/**
 * Interface ShipmentCommentCreationInterface
 */
export interface SalesDataShipmentCommentCreationInterface {
    extension_attributes?: SalesDataShipmentCommentCreationExtensionInterface;
    /**
     * Comment.
     */
    comment: string;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCommentInterface
 */
export interface SalesDataShipmentCommentExtensionInterface {
}
/**
 * Shipment comment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
 */
export interface SalesDataShipmentCommentInterface {
    /**
     * Is-customer-notified flag value.
     */
    is_customer_notified: number;
    /**
     * Parent ID.
     */
    parent_id: number;
    extension_attributes?: SalesDataShipmentCommentExtensionInterface;
    /**
     * Comment.
     */
    comment: string;
    /**
     * Is-visible-on-storefront flag value.
     */
    is_visible_on_front: number;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Invoice ID.
     */
    entity_id?: number;
}
/**
 * Shipment comment search result interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A shipment document can contain comments.
 */
export interface SalesDataShipmentCommentSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataShipmentCommentInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentCreationArgumentsInterface
 */
export interface SalesDataShipmentCreationArgumentsExtensionInterface {
}
/**
 * Interface for creation arguments for Shipment.
 */
export interface SalesDataShipmentCreationArgumentsInterface {
    extension_attributes?: SalesDataShipmentCreationArgumentsExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentInterface
 */
export interface SalesDataShipmentExtensionInterface {
}
/**
 * Shipment interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentInterface {
    /**
     * Billing address ID.
     */
    billing_address_id?: number;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Customer ID.
     */
    customer_id?: number;
    /**
     * Email-sent flag value.
     */
    email_sent?: number;
    /**
     * Shipment ID.
     */
    entity_id?: number;
    /**
     * Increment ID.
     */
    increment_id?: string;
    /**
     * Order ID.
     */
    order_id: number;
    /**
     * Array of packages, if any. Otherwise, null.
     */
    packages?: SalesDataShipmentPackageInterface[];
    /**
     * Shipment status.
     */
    shipment_status?: number;
    /**
     * Shipping address ID.
     */
    shipping_address_id?: number;
    /**
     * Shipping label.
     */
    shipping_label?: string;
    /**
     * Store ID.
     */
    store_id?: number;
    /**
     * Total quantity.
     */
    total_qty?: number;
    /**
     * Total weight.
     */
    total_weight?: number;
    /**
     * Updated-at timestamp.
     */
    updated_at?: string;
    /**
     * Array of items.
     */
    items: SalesDataShipmentItemInterface[];
    /**
     * Array of tracks.
     */
    tracks: SalesDataShipmentTrackInterface[];
    /**
     * Array of comments.
     */
    comments: SalesDataShipmentCommentInterface[];
    extension_attributes?: SalesDataShipmentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemCreationInterface
 */
export interface SalesDataShipmentItemCreationExtensionInterface {
}
/**
 * Input argument for shipment item creation Interface ShipmentItemCreationInterface
 */
export interface SalesDataShipmentItemCreationInterface {
    extension_attributes?: SalesDataShipmentItemCreationExtensionInterface;
    /**
     * Order item ID.
     */
    order_item_id: number;
    /**
     * Quantity.
     */
    qty: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentItemInterface
 */
export interface SalesDataShipmentItemExtensionInterface {
}
/**
 * Shipment item interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. A product is an item in a shipment.
 */
export interface SalesDataShipmentItemInterface {
    /**
     * Additional data.
     */
    additional_data?: string;
    /**
     * Description.
     */
    description?: string;
    /**
     * Shipment item ID.
     */
    entity_id?: number;
    /**
     * Name.
     */
    name?: string;
    /**
     * Parent ID.
     */
    parent_id?: number;
    /**
     * Price.
     */
    price?: number;
    /**
     * Product ID.
     */
    product_id?: number;
    /**
     * Row total.
     */
    row_total?: number;
    /**
     * SKU.
     */
    sku?: string;
    /**
     * Weight.
     */
    weight?: number;
    extension_attributes?: SalesDataShipmentItemExtensionInterface;
    /**
     * Order item ID.
     */
    order_item_id: number;
    /**
     * Quantity.
     */
    qty: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageCreationInterface
 */
export interface SalesDataShipmentPackageCreationExtensionInterface {
}
/**
 * Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentPackageCreationInterface {
    extension_attributes?: SalesDataShipmentPackageCreationExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentPackageInterface
 */
export interface SalesDataShipmentPackageExtensionInterface {
}
/**
 * Shipment package interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentPackageInterface {
    extension_attributes?: SalesDataShipmentPackageExtensionInterface;
}
/**
 * Shipment search result interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package.
 */
export interface SalesDataShipmentSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataShipmentInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackCreationInterface
 */
export interface SalesDataShipmentTrackCreationExtensionInterface {
}
/**
 * Shipment Track Creation interface.
 */
export interface SalesDataShipmentTrackCreationInterface {
    extension_attributes?: SalesDataShipmentTrackCreationExtensionInterface;
    /**
     * Track number.
     */
    track_number: string;
    /**
     * Title.
     */
    title: string;
    /**
     * Carrier code.
     */
    carrier_code: string;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShipmentTrackInterface
 */
export interface SalesDataShipmentTrackExtensionInterface {
}
/**
 * Shipment track interface. A shipment is a delivery package that contains products. A shipment document accompanies the shipment. This document lists the products and their quantities in the delivery package. Merchants and customers can track shipments.
 */
export interface SalesDataShipmentTrackInterface {
    /**
     * The order_id for the shipment package.
     */
    order_id: number;
    /**
     * Created-at timestamp.
     */
    created_at?: string;
    /**
     * Shipment package ID.
     */
    entity_id?: number;
    /**
     * Parent ID.
     */
    parent_id: number;
    /**
     * Updated-at timestamp.
     */
    updated_at?: string;
    /**
     * Weight.
     */
    weight: number;
    /**
     * Quantity.
     */
    qty: number;
    /**
     * Description.
     */
    description: string;
    extension_attributes?: SalesDataShipmentTrackExtensionInterface;
    /**
     * Track number.
     */
    track_number: string;
    /**
     * Title.
     */
    title: string;
    /**
     * Carrier code.
     */
    carrier_code: string;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingAssignmentInterface
 */
export interface SalesDataShippingAssignmentExtensionInterface {
}
/**
 * Interface ShippingAssignmentInterface
 */
export interface SalesDataShippingAssignmentInterface {
    shipping: SalesDataShippingInterface;
    /**
     * Order items of shipping assignment
     */
    items: SalesDataOrderItemInterface[];
    /**
     * Stock id
     */
    stock_id?: number;
    extension_attributes?: SalesDataShippingAssignmentExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\ShippingInterface
 */
export interface SalesDataShippingExtensionInterface {
}
/**
 * Interface ShippingInterface
 */
export interface SalesDataShippingInterface {
    address?: SalesDataOrderAddressInterface;
    /**
     * Shipping method
     */
    method?: string;
    total?: SalesDataTotalInterface;
    extension_attributes?: SalesDataShippingExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\TotalInterface
 */
export interface SalesDataTotalExtensionInterface {
}
/**
 * Interface TotalInterface
 */
export interface SalesDataTotalInterface {
    /**
     * Base shipping amount.
     */
    base_shipping_amount?: number;
    /**
     * Base shipping canceled.
     */
    base_shipping_canceled?: number;
    /**
     * Base shipping discount amount.
     */
    base_shipping_discount_amount?: number;
    /**
     * Base shipping discount tax compensation amount.
     */
    base_shipping_discount_tax_compensation_amnt?: number;
    /**
     * Base shipping including tax.
     */
    base_shipping_incl_tax?: number;
    /**
     * Base shipping invoiced.
     */
    base_shipping_invoiced?: number;
    /**
     * Base shipping refunded.
     */
    base_shipping_refunded?: number;
    /**
     * Base shipping tax amount.
     */
    base_shipping_tax_amount?: number;
    /**
     * Base shipping tax refunded.
     */
    base_shipping_tax_refunded?: number;
    /**
     * Shipping amount.
     */
    shipping_amount?: number;
    /**
     * Shipping canceled amount.
     */
    shipping_canceled?: number;
    /**
     * Shipping discount amount.
     */
    shipping_discount_amount?: number;
    /**
     * Shipping discount tax compensation amount.
     */
    shipping_discount_tax_compensation_amount?: number;
    /**
     * Shipping including tax amount.
     */
    shipping_incl_tax?: number;
    /**
     * Shipping invoiced amount.
     */
    shipping_invoiced?: number;
    /**
     * Shipping refunded amount.
     */
    shipping_refunded?: number;
    /**
     * Shipping tax amount.
     */
    shipping_tax_amount?: number;
    /**
     * Shipping tax refunded amount.
     */
    shipping_tax_refunded?: number;
    extension_attributes?: SalesDataTotalExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Sales\Api\Data\TransactionInterface
 */
export interface SalesDataTransactionExtensionInterface {
}
/**
 * Transaction interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
 */
export interface SalesDataTransactionInterface {
    /**
     * Transaction ID.
     */
    transaction_id: number;
    /**
     * The parent ID for the transaction. Otherwise, null.
     */
    parent_id?: number;
    /**
     * Order ID.
     */
    order_id: number;
    /**
     * Payment ID.
     */
    payment_id: number;
    /**
     * Transaction business ID.
     */
    txn_id: string;
    /**
     * Parent transaction business ID.
     */
    parent_txn_id: string;
    /**
     * Transaction type.
     */
    txn_type: string;
    /**
     * Is-closed flag value.
     */
    is_closed: number;
    /**
     * Array of additional information. Otherwise, null.
     */
    additional_information?: string[];
    /**
     * Created-at timestamp.
     */
    created_at: string;
    /**
     * Array of child transactions.
     */
    child_transactions: SalesDataTransactionInterface[];
    extension_attributes?: SalesDataTransactionExtensionInterface;
}
/**
 * Transaction search result interface. A transaction is an interaction between a merchant and a customer such as a purchase, a credit, a refund, and so on.
 */
export interface SalesDataTransactionSearchResultInterface {
    /**
     * Array of collection items.
     */
    items: SalesDataTransactionInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\ConditionInterface
 */
export interface SalesRuleDataConditionExtensionInterface {
}
/**
 * Interface ConditionInterface
 */
export interface SalesRuleDataConditionInterface {
    /**
     * Condition type
     */
    condition_type: string;
    /**
     * List of conditions
     */
    conditions?: SalesRuleDataConditionInterface[];
    /**
     * The aggregator type
     */
    aggregator_type?: string;
    /**
     * The operator of the condition
     */
    operator: string;
    /**
     * The attribute name of the condition
     */
    attribute_name?: string;
    /**
     * The value of the condition
     */
    value: string;
    extension_attributes?: SalesRuleDataConditionExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponInterface
 */
export interface SalesRuleDataCouponExtensionInterface {
}
/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\CouponGenerationSpecInterface
 */
export interface SalesRuleDataCouponGenerationSpecExtensionInterface {
}
/**
 * CouponGenerationSpecInterface
 */
export interface SalesRuleDataCouponGenerationSpecInterface {
    /**
     * The id of the rule associated with the coupon
     */
    rule_id: number;
    /**
     * Format of generated coupon code
     */
    format: string;
    /**
     * Of coupons to generate
     */
    quantity: number;
    /**
     * Length of coupon code
     */
    length: number;
    /**
     * The prefix
     */
    prefix?: string;
    /**
     * The suffix
     */
    suffix?: string;
    /**
     * The spacing where the delimiter should exist
     */
    delimiter_at_every?: number;
    /**
     * The delimiter
     */
    delimiter?: string;
    extension_attributes?: SalesRuleDataCouponGenerationSpecExtensionInterface;
}
/**
 * Interface CouponInterface
 */
export interface SalesRuleDataCouponInterface {
    /**
     * Coupon id
     */
    coupon_id?: number;
    /**
     * The id of the rule associated with the coupon
     */
    rule_id: number;
    /**
     * Coupon code
     */
    code?: string;
    /**
     * Usage limit
     */
    usage_limit?: number;
    /**
     * Usage limit per customer
     */
    usage_per_customer?: number;
    /**
     * The number of times the coupon has been used
     */
    times_used: number;
    /**
     * Expiration date
     */
    expiration_date?: string;
    /**
     * The coupon is primary coupon for the rule that it's associated with
     */
    is_primary: boolean;
    /**
     * When the coupon is created
     */
    created_at?: string;
    /**
     * Of coupon
     */
    type?: number;
    extension_attributes?: SalesRuleDataCouponExtensionInterface;
}
/**
 * Coupon mass delete results interface.
 */
export interface SalesRuleDataCouponMassDeleteResultInterface {
    /**
     * List of failed items.
     */
    failed_items: string[];
    /**
     * List of missing items.
     */
    missing_items: string[];
}
/**
 * 
 */
export interface SalesRuleDataCouponSearchResultInterface {
    /**
     * Rules.
     */
    items: SalesRuleDataCouponInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleInterface
 */
export interface SalesRuleDataRuleExtensionInterface {
    reward_points_delta?: number;
}
/**
 * Interface RuleInterface
 */
export interface SalesRuleDataRuleInterface {
    /**
     * Rule id
     */
    rule_id?: number;
    /**
     * Rule name
     */
    name?: string;
    /**
     * Display label
     */
    store_labels?: SalesRuleDataRuleLabelInterface[];
    /**
     * Description
     */
    description?: string;
    /**
     * A list of websites the rule applies to
     */
    website_ids: number[];
    /**
     * Ids of customer groups that the rule applies to
     */
    customer_group_ids: number[];
    /**
     * The start date when the coupon is active
     */
    from_date?: string;
    /**
     * The end date when the coupon is active
     */
    to_date?: string;
    /**
     * Number of uses per customer
     */
    uses_per_customer: number;
    /**
     * The coupon is active
     */
    is_active: boolean;
    condition?: SalesRuleDataConditionInterface;
    action_condition?: SalesRuleDataConditionInterface;
    /**
     * To stop rule processing
     */
    stop_rules_processing: boolean;
    /**
     * Is this field needed
     */
    is_advanced: boolean;
    /**
     * Product ids
     */
    product_ids?: number[];
    /**
     * Sort order
     */
    sort_order: number;
    /**
     * Simple action of the rule
     */
    simple_action?: string;
    /**
     * Discount amount
     */
    discount_amount: number;
    /**
     * Maximum qty discount is applied
     */
    discount_qty?: number;
    /**
     * Discount step
     */
    discount_step: number;
    /**
     * The rule applies to shipping
     */
    apply_to_shipping: boolean;
    /**
     * How many times the rule has been used
     */
    times_used: number;
    /**
     * Whether the rule is in RSS
     */
    is_rss: boolean;
    /**
     * Coupon type
     */
    coupon_type: string;
    /**
     * To auto generate coupon
     */
    use_auto_generation: boolean;
    /**
     * Limit of uses per coupon
     */
    uses_per_coupon: number;
    /**
     * To grant free shipping
     */
    simple_free_shipping?: string;
    extension_attributes?: SalesRuleDataRuleExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\SalesRule\Api\Data\RuleLabelInterface
 */
export interface SalesRuleDataRuleLabelExtensionInterface {
}
/**
 * Interface RuleLabelInterface
 */
export interface SalesRuleDataRuleLabelInterface {
    /**
     * StoreId
     */
    store_id: number;
    /**
     * The label for the store
     */
    store_label: string;
    extension_attributes?: SalesRuleDataRuleLabelExtensionInterface;
}
/**
 * 
 */
export interface SalesRuleDataRuleSearchResultInterface {
    /**
     * Rules.
     */
    items: SalesRuleDataRuleInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Interface for Shared Catalog search results.
 */
export interface SharedCatalogDataSearchResultsInterface {
    /**
     * Shared Catalog list.
     */
    items: SharedCatalogDataSharedCatalogInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * SharedCatalogInterface interface.
 */
export interface SharedCatalogDataSharedCatalogInterface {
    /**
     * ID.
     */
    id?: number;
    /**
     * Shared Catalog name.
     */
    name: string;
    /**
     * Shared Catalog description.
     */
    description: string;
    /**
     * Customer Group Id.
     */
    customer_group_id: number;
    /**
     * Shared Catalog type.
     */
    type: number;
    /**
     * Created time for Shared Catalog.
     */
    created_at: string;
    /**
     * Admin id for Shared Catalog.
     */
    created_by: number;
    /**
     * Store id for Shared Catalog.
     */
    store_id: number;
    /**
     * Tax class id.
     */
    tax_class_id: number;
}
/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\GroupInterface
 */
export interface StoreDataGroupExtensionInterface {
}
/**
 * Group interface
 */
export interface StoreDataGroupInterface {
    id: number;
    website_id: number;
    root_category_id: number;
    default_store_id: number;
    name: string;
    /**
     * Group code.
     */
    code: string;
    extension_attributes?: StoreDataGroupExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\StoreConfigInterface
 */
export interface StoreDataStoreConfigExtensionInterface {
}
/**
 * StoreConfig interface
 */
export interface StoreDataStoreConfigInterface {
    /**
     * Store id
     */
    id: number;
    /**
     * Store code
     */
    code: string;
    /**
     * Website id of the store
     */
    website_id: number;
    /**
     * Store locale
     */
    locale: string;
    /**
     * Base currency code
     */
    base_currency_code: string;
    /**
     * Default display currency code
     */
    default_display_currency_code: string;
    /**
     * Timezone of the store
     */
    timezone: string;
    /**
     * The unit of weight
     */
    weight_unit: string;
    /**
     * Base URL for the store
     */
    base_url: string;
    /**
     * Base link URL for the store
     */
    base_link_url: string;
    /**
     * Base static URL for the store
     */
    base_static_url: string;
    /**
     * Base media URL for the store
     */
    base_media_url: string;
    /**
     * Secure base URL for the store
     */
    secure_base_url: string;
    /**
     * Secure base link URL for the store
     */
    secure_base_link_url: string;
    /**
     * Secure base static URL for the store
     */
    secure_base_static_url: string;
    /**
     * Secure base media URL for the store
     */
    secure_base_media_url: string;
    extension_attributes?: StoreDataStoreConfigExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\StoreInterface
 */
export interface StoreDataStoreExtensionInterface {
}
/**
 * Store interface
 */
export interface StoreDataStoreInterface {
    id: number;
    code: string;
    /**
     * Store name
     */
    name: string;
    website_id: number;
    store_group_id: number;
    extension_attributes?: StoreDataStoreExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Store\Api\Data\WebsiteInterface
 */
export interface StoreDataWebsiteExtensionInterface {
}
/**
 * Website interface
 */
export interface StoreDataWebsiteInterface {
    id: number;
    code: string;
    /**
     * Website name
     */
    name: string;
    default_group_id: number;
    extension_attributes?: StoreDataWebsiteExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\AppliedTaxRateInterface
 */
export interface TaxDataAppliedTaxRateExtensionInterface {
}
/**
 * Applied tax rate interface.
 */
export interface TaxDataAppliedTaxRateInterface {
    /**
     * Code
     */
    code?: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Tax Percent
     */
    percent?: number;
    extension_attributes?: TaxDataAppliedTaxRateExtensionInterface;
}
/**
 * Interface GrandTotalDetailsInterface
 */
export interface TaxDataGrandTotalDetailsInterface {
    /**
     * Tax amount value
     */
    amount: number;
    /**
     * Tax rates info
     */
    rates: TaxDataGrandTotalRatesInterface[];
    /**
     * Group identifier
     */
    group_id: number;
}
/**
 * Interface GrandTotalRatesInterface
 */
export interface TaxDataGrandTotalRatesInterface {
    /**
     * Tax percentage value
     */
    percent: string;
    /**
     * Rate title
     */
    title: string;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsAppliedTaxInterface
 */
export interface TaxDataOrderTaxDetailsAppliedTaxExtensionInterface {
    rates?: TaxDataAppliedTaxRateInterface[];
}
/**
 * Interface OrderTaxDetailsAppliedTaxInterface
 */
export interface TaxDataOrderTaxDetailsAppliedTaxInterface {
    /**
     * Code
     */
    code?: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Tax Percent
     */
    percent?: number;
    /**
     * Tax amount
     */
    amount: number;
    /**
     * Tax amount in base currency
     */
    base_amount: number;
    extension_attributes?: TaxDataOrderTaxDetailsAppliedTaxExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\OrderTaxDetailsItemInterface
 */
export interface TaxDataOrderTaxDetailsItemExtensionInterface {
}
/**
 * Interface OrderTaxDetailsItemInterface
 */
export interface TaxDataOrderTaxDetailsItemInterface {
    /**
     * Type (shipping, product, weee, gift wrapping, etc)
     */
    type?: string;
    /**
     * Item id if this item is a product
     */
    item_id?: number;
    /**
     * Associated item id if this item is associated with another item, null otherwise
     */
    associated_item_id?: number;
    /**
     * Applied taxes
     */
    applied_taxes?: TaxDataOrderTaxDetailsAppliedTaxInterface[];
    extension_attributes?: TaxDataOrderTaxDetailsItemExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxClassInterface
 */
export interface TaxDataTaxClassExtensionInterface {
}
/**
 * Tax class interface.
 */
export interface TaxDataTaxClassInterface {
    /**
     * Tax class ID.
     */
    class_id?: number;
    /**
     * Tax class name.
     */
    class_name: string;
    /**
     * Tax class type.
     */
    class_type: string;
    extension_attributes?: TaxDataTaxClassExtensionInterface;
}
/**
 * Interface for tax class search results.
 */
export interface TaxDataTaxClassSearchResultsInterface {
    /**
     * Items
     */
    items: TaxDataTaxClassInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateInterface
 */
export interface TaxDataTaxRateExtensionInterface {
}
/**
 * Tax rate interface.
 */
export interface TaxDataTaxRateInterface {
    /**
     * Id
     */
    id?: number;
    /**
     * Country id
     */
    tax_country_id: string;
    /**
     * Region id
     */
    tax_region_id?: number;
    /**
     * Region name
     */
    region_name?: string;
    /**
     * Postcode
     */
    tax_postcode?: string;
    /**
     * Zip is range
     */
    zip_is_range?: number;
    /**
     * Zip range from
     */
    zip_from?: number;
    /**
     * Zip range to
     */
    zip_to?: number;
    /**
     * Tax rate in percentage
     */
    rate: number;
    /**
     * Tax rate code
     */
    code: string;
    /**
     * Tax rate titles
     */
    titles?: TaxDataTaxRateTitleInterface[];
    extension_attributes?: TaxDataTaxRateExtensionInterface;
}
/**
 * Interface for tax rate search results.
 */
export interface TaxDataTaxRateSearchResultsInterface {
    /**
     * Items
     */
    items: TaxDataTaxRateInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRateTitleInterface
 */
export interface TaxDataTaxRateTitleExtensionInterface {
}
/**
 * Tax rate title interface.
 */
export interface TaxDataTaxRateTitleInterface {
    /**
     * Store id
     */
    store_id: string;
    /**
     * Title value
     */
    value: string;
    extension_attributes?: TaxDataTaxRateTitleExtensionInterface;
}
/**
 * ExtensionInterface class for @see \Magento\Tax\Api\Data\TaxRuleInterface
 */
export interface TaxDataTaxRuleExtensionInterface {
}
/**
 * Tax rule interface.
 */
export interface TaxDataTaxRuleInterface {
    /**
     * Id
     */
    id?: number;
    /**
     * Tax rule code
     */
    code: string;
    /**
     * Priority
     */
    priority: number;
    /**
     * Sort order.
     */
    position: number;
    /**
     * Customer tax class id
     */
    customer_tax_class_ids: number[];
    /**
     * Product tax class id
     */
    product_tax_class_ids: number[];
    /**
     * Tax rate ids
     */
    tax_rate_ids: number[];
    /**
     * Calculate subtotal.
     */
    calculate_subtotal?: boolean;
    extension_attributes?: TaxDataTaxRuleExtensionInterface;
}
/**
 * Interface for tax rule search results.
 */
export interface TaxDataTaxRuleSearchResultsInterface {
    /**
     * Items
     */
    items: TaxDataTaxRuleInterface[];
    search_criteria: FrameworkSearchCriteriaInterface;
    /**
     * Total count.
     */
    total_count: number;
}
/**
 * Gateway vault payment token interface.
 */
export interface VaultDataPaymentTokenInterface {
    /**
     * Entity ID.
     */
    entity_id?: number;
    /**
     * Customer ID.
     */
    customer_id?: number;
    /**
     * Public hash
     */
    public_hash: string;
    /**
     * Payment method code
     */
    payment_method_code: string;
    /**
     * Type
     */
    type: string;
    /**
     * Token creation timestamp
     */
    created_at?: string;
    /**
     * Token expiration timestamp
     */
    expires_at?: string;
    /**
     * Gateway token ID
     */
    gateway_token: string;
    /**
     * Token details
     */
    token_details: string;
    /**
     * Is active.
     */
    is_active: boolean;
    /**
     * Is visible.
     */
    is_visible: boolean;
}
/**
 * ExtensionInterface class for @see \Magento\Weee\Api\Data\ProductRender\WeeeAdjustmentAttributeInterface
 */
export interface WeeeDataProductRenderWeeeAdjustmentAttributeExtensionInterface {
}
/**
 * List of all weee attributes, their amounts, etc.., that product has
 */
export interface WeeeDataProductRenderWeeeAdjustmentAttributeInterface {
    /**
     * Weee attribute amount
     */
    amount: string;
    /**
     * Tax which is calculated to fixed product tax attribute
     */
    tax_amount: string;
    /**
     * Tax amount of weee attribute
     */
    tax_amount_incl_tax: string;
    /**
     * Product amount exclude tax
     */
    amount_excl_tax: string;
    /**
     * Weee attribute code
     */
    attribute_code: string;
    extension_attributes: WeeeDataProductRenderWeeeAdjustmentAttributeExtensionInterface;
}
