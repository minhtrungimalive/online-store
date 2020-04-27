import { AuthParam } from '../reducers/auth/model';
import { ImageSource } from '../reducers/gallery/model';
import { ProductSource } from '../reducers/product/model';

export const getAuthMock = (param?: AuthParam) => {
  return new Promise((resolve, reject) => {
    if (param) {
      setTimeout(() => {
        reject(new Error('Not authentication'));
      }, 2000);
    }

    setTimeout(() => {
      resolve({
        isAuthenticated: true,
      });
    }, 2000);
  });
};

export const getImageGalleryMock = () => {
  return new Promise(resolve => {
    const sources: ImageSource[] = [
      {
        id: 'uuid1',
        caption: 'Photo',
        imgUrl: '/feature-gallery/img1.jpg',
        price: 5,
        unit: '£',
      },
      {
        id: 'uuid2',
        caption: 'Photo',
        imgUrl: '/feature-gallery/img2.jpg',
        price: 10,
        unit: '£',
      },
      {
        id: 'uuid3',
        caption: 'Photo',
        imgUrl: '/feature-gallery/img3.jpg',
        price: 9,
        unit: '£',
      },
      {
        id: 'uuid4',
        caption: 'Photo',
        imgUrl: '/feature-gallery/img4.jpg',
        price: 4,
        unit: '£',
      },
      {
        id: 'uuid5',
        caption: 'Photo',
        imgUrl: '/feature-gallery/img5.jpg',
        price: 6,
        unit: '£',
      },
      {
        id: 'uuid6',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1584300290090-32d1aa5cb24a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid7',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1486591913781-4bee9ed65bfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid8',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1496135137828-b0b35fc44608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid9',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1518730518541-d0843268c287?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid10',
        caption: 'Photo',
        imgUrl: '/feature-gallery/img6.jpg',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid11',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1560903614-3361d5d47842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid12',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1583355862089-81e9e6e50f7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid13',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1583436870159-10acce5bd1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid14',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1446160657592-4782fb76fb99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid15',
        caption: 'Photo',
        imgUrl: 'https://images.unsplash.com/photo-1583355964148-d29248371825?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid16',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1583249886636-bd6784101e8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid17',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1559307499-537e59917e74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid18',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1583131998088-0291b4cfe693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=643&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid19',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1569878698889-7bffa1896872?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid20',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1524307751606-4f70b5303caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 7,
        unit: '£',
      },
      {
        id: 'uuid21',
        caption: 'Photo',
        imgUrl:
          'https://images.unsplash.com/photo-1582303268612-2e501a717593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        price: 7,
        unit: '£',
      },
    ];
    setTimeout(() => {
      resolve({
        data: sources,
      });
    }, 2000);
  });
};

export const getProductList = () => {
  return new Promise(resolve => {
    const sources: ProductSource[] = [
      {
        id: 'uuid1',
        name: 'Iphone 11 Pro 256GB',
        imgUrl: 'https://bizweb.dktcdn.net/100/318/659/products/iphone-11-pro-midnight-green.png?v=1568190839663',
        description: 'New product of apple in 2020 with performance strong.',
        discount: 10,
        price: 32000000,
      },
      {
        id: 'uuid2',
        name: 'Iphone X 256GB',
        imgUrl:
          'https://thumbnail.imgbin.com/7/25/0/imgbin-iphone-x-iphone-8-iphone-7-iphone-4s-iphone-6s-apple-5Xfs0QnRqhwA1YM0Vc2cuBXFG_t.jpg',
        description: 'Iphone X is new product of apple in 2018.',
        discount: 10,
        price: 32000000,
      },
      {
        id: 'uuid3',
        name: 'Samsung Z Flip',
        imgUrl: `https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FSamsung_Galaxy_Z_Flip&psig=AOvVaw1Nd02H2Z8wgu1kFGnaD_K
        Q&ust=1587369143017000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDCyIKB9OgCFQAAAAAdAAAAABANH`,
        description: 'Iphone X is new product of apple in 2018.',
        discount: 0,
        price: 38000000,
      },
    ];

    setTimeout(() => {
      resolve({
        data: sources,
      });
    }, 1000);
  });
};
