import { AuthParam } from '../reducers/auth/model';
import { ImageSource } from '../reducers/gallery/model';

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
