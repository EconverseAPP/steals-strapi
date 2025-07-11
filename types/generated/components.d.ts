import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    description: 'Componente para exibir um banner com imagem ou v\u00EDdeo';
    displayName: 'Banner';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
  };
}

export interface SharedBannerWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_with_titles';
  info: {
    description: 'Banner com t\u00EDtulo e descri\u00E7\u00E3o';
    displayName: 'Banner com t\u00EDtulo';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedCarrosselDeImagens extends Struct.ComponentSchema {
  collectionName: 'components_shared_carrossel_de_imagens';
  info: {
    description: 'Componente para exibir um carrossel de imagens com diferentes estilos';
    displayName: 'Carrossel de Imagens';
  };
  attributes: {
    medias: Schema.Attribute.Component<'shared.carrossel-media-item', true>;
    pagination: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    style: Schema.Attribute.Enumeration<['Estilo 1', 'Estilo 2']> &
      Schema.Attribute.Required;
  };
}

export interface SharedCarrosselDeLooks extends Struct.ComponentSchema {
  collectionName: 'components_shared_carrossel_de_looks';
  info: {
    description: 'Componente para exibir um carrossel de looks com scroll autom\u00E1tico';
    displayName: 'Carrossel de Looks';
  };
  attributes: {
    medias: Schema.Attribute.Component<'shared.carrossel-look-item', true>;
    scroll_automatico: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCarrosselDeVideos extends Struct.ComponentSchema {
  collectionName: 'components_shared_carrossel_de_videos';
  info: {
    description: 'Componente para exibir um carrossel de v\u00EDdeos com thumbnails';
    displayName: 'Carrossel de V\u00EDdeos';
  };
  attributes: {
    medias: Schema.Attribute.Component<'shared.video-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCarrosselLookItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_carrossel_look_items';
  info: {
    description: 'Item individual do carrossel de looks com m\u00EDdia';
    displayName: 'Carrossel Look Item';
  };
  attributes: {
    media: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedCarrosselMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_carrossel_media_items';
  info: {
    description: 'Item individual do carrossel com m\u00EDdia, t\u00EDtulo, link e CTA';
    displayName: 'Carrossel Media Item';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_category';
  info: {
    description: 'Common category component with title and link';
    displayName: 'Category';
  };
  attributes: {
    categories: Schema.Attribute.Component<'shared.category-item', true>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCategoryBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_banner';
  info: {
    description: 'Component to display a category with banner, title and destination';
    displayName: 'Category Banner';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCategoryBannerList extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_banner_list';
  info: {
    description: 'Container to organize multiple category banners';
    displayName: 'Category Banner List';
  };
  attributes: {
    categories: Schema.Attribute.Component<'shared.category-banner', true> &
      Schema.Attribute.Required;
  };
}

export interface SharedCategoryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_item';
  info: {
    description: 'Basic category item without recursion';
    displayName: 'Category Item';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCategoryWithSubcategories
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_with_subcategories';
  info: {
    description: 'Category that can contain subcategories';
    displayName: 'Category with Subcategories';
  };
  attributes: {
    categories: Schema.Attribute.Component<'shared.category', true>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContents extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    description: '';
    displayName: 'Contents';
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      [
        'shared.banner-with-title',
        'shared.media',
        'shared.quote',
        'shared.rich-text',
        'shared.seo',
        'shared.slider',
        'shared.mosaico',
        'shared.divisor',
        'shared.phrase-carousel',
        'shared.carrossel-de-looks',
        'shared.carrossel-de-imagens',
        'shared.lista-de-links',
        'shared.banner',
        'shared.imagem-sessao-livre',
        'shared.carrossel-de-videos',
        'shared.vitrine-produtos',
      ]
    >;
    default: Schema.Attribute.Boolean;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDivisor extends Struct.ComponentSchema {
  collectionName: 'components_shared_divisors';
  info: {
    description: 'Componente para adicionar espa\u00E7amento entre se\u00E7\u00F5es';
    displayName: 'Divisor';
  };
  attributes: {
    spacing: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 100;
          min: 0;
        },
        number
      >;
  };
}

export interface SharedImagemSessaoLivre extends Struct.ComponentSchema {
  collectionName: 'components_shared_imagem_sessao_livres';
  info: {
    description: 'Componente para exibir uma imagem com se\u00E7\u00F5es posicionadas livremente';
    displayName: 'Imagem Sess\u00E3o Livre';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    link: Schema.Attribute.String;
    sections: Schema.Attribute.Component<'shared.section-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    description: 'Item individual de um link com texto e URL';
    displayName: 'Link Item';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListaDeLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_lista_de_links';
  info: {
    description: 'Componente para exibir uma lista de links com t\u00EDtulo';
    displayName: 'Lista de Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMenuContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_content';
  info: {
    description: 'Componente para organizar conte\u00FAdo do menu com t\u00EDtulo e conte\u00FAdo din\u00E2mico';
    displayName: 'Menu Content';
  };
  attributes: {
    content: Schema.Attribute.DynamicZone<
      ['shared.category-banner-list', 'shared.category-with-subcategories']
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMosaico extends Struct.ComponentSchema {
  collectionName: 'components_shared_mosaicos';
  info: {
    description: 'Componente para exibir um mosaico de imagens com t\u00EDtulo';
    displayName: 'Mosaico';
  };
  attributes: {
    medias: Schema.Attribute.Component<'shared.media', true>;
  };
}

export interface SharedPhraseCarousel extends Struct.ComponentSchema {
  collectionName: 'components_shared_phrase_carousels';
  info: {
    description: 'Componente para exibir um carrossel de frases com links';
    displayName: 'Phrase Carousel';
  };
  attributes: {
    phrases: Schema.Attribute.Component<'shared.phrase-item', true>;
  };
}

export interface SharedPhraseItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_phrase_items';
  info: {
    description: 'Item individual de uma frase com texto e link';
    displayName: 'Phrase Item';
  };
  attributes: {
    link: Schema.Attribute.String;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_items';
  info: {
    description: 'Item de se\u00E7\u00E3o com posicionamento livre';
    displayName: 'Section Item';
  };
  attributes: {
    largura: Schema.Attribute.Integer & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    posX: Schema.Attribute.Integer & Schema.Attribute.Required;
    posY: Schema.Attribute.Integer & Schema.Attribute.Required;
    zIndex: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_items';
  info: {
    description: 'Item individual de v\u00EDdeo com thumbnail e informa\u00E7\u00F5es';
    displayName: 'Video Item';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    link: Schema.Attribute.String;
    media: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    thumbnail: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedVitrineProdutos extends Struct.ComponentSchema {
  collectionName: 'components_shared_vitrine_produtos';
  info: {
    description: 'Componente para exibir uma vitrine de produtos com t\u00EDtulo, CTA e handle da cole\u00E7\u00E3o';
    displayName: 'Vitrine de Produtos';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    handle: Schema.Attribute.String & Schema.Attribute.Required;
    tipo_exibicao: Schema.Attribute.Enumeration<
      ['horizontal', 'lista_enumerada', 'multiplas_linhas']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'horizontal'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner': SharedBanner;
      'shared.banner-with-title': SharedBannerWithTitle;
      'shared.carrossel-de-imagens': SharedCarrosselDeImagens;
      'shared.carrossel-de-looks': SharedCarrosselDeLooks;
      'shared.carrossel-de-videos': SharedCarrosselDeVideos;
      'shared.carrossel-look-item': SharedCarrosselLookItem;
      'shared.carrossel-media-item': SharedCarrosselMediaItem;
      'shared.category': SharedCategory;
      'shared.category-banner': SharedCategoryBanner;
      'shared.category-banner-list': SharedCategoryBannerList;
      'shared.category-item': SharedCategoryItem;
      'shared.category-with-subcategories': SharedCategoryWithSubcategories;
      'shared.contents': SharedContents;
      'shared.divisor': SharedDivisor;
      'shared.imagem-sessao-livre': SharedImagemSessaoLivre;
      'shared.link-item': SharedLinkItem;
      'shared.lista-de-links': SharedListaDeLinks;
      'shared.media': SharedMedia;
      'shared.menu-content': SharedMenuContent;
      'shared.mosaico': SharedMosaico;
      'shared.phrase-carousel': SharedPhraseCarousel;
      'shared.phrase-item': SharedPhraseItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-item': SharedSectionItem;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-item': SharedVideoItem;
      'shared.vitrine-produtos': SharedVitrineProdutos;
    }
  }
}
