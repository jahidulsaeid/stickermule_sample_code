import menImg from '@/assets/tempimg/men.jpeg';
import womenImg from '@/assets/tempimg/women.jpeg';
import juniorImg from '@/assets/tempimg/junior.jpeg';
import accessories from '@/assets/tempimg/accessories.png';
import polo from '@/assets/images/menu-icon/polo.png';
import teens from '@/assets/images/menu-icon/tees.png';
import sweater from '@/assets/images/menu-icon/sweaters.png';
import jackets from '@/assets/images/menu-icon/jackets.png';
import printed from '@/assets/images/menu-icon/printed.png';
import belt from '@/assets/images/menu-icon/belt.png';
import bag from '@/assets/images/menu-icon/bag.png';
import shoes from '@/assets/images/menu-icon/shoes.png';
import socks from '@/assets/images/menu-icon/socks.png';
import briefs from '@/assets/images/menu-icon/briefs.png';
import cap from '@/assets/images/menu-icon/cap.png';
import innerwear from '@/assets/images/menu-icon/briefs.png';

export const menu = [
  {
    id: 2,
    name: 'Mens',
    path: '/products/1',
    columns: {
      cover: menImg,
      data: [
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/',
              label: 'Top',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=polo',
                  label: 'Polo',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=tees',
                  label: 'Teens',
                  icon: teens,
                },
                {
                  id: 1,
                  path: '/collection?category=shirt',
                  label: 'Shirt',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=sweater',
                  label: 'Sweaters',
                  icon: sweater,
                },
                {
                  id: 1,
                  path: '/collection?category=jacket',
                  label: 'Jackets',
                  icon: jackets,
                },
                {
                  id: 1,
                  path: '/collection?category=printed',
                  label: 'Print Teens',
                  icon: printed,
                },
              ],
            },
          ],
        },
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/',
              label: 'Bottom',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=shorts',
                  label: 'Shorts',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=jeans',
                  label: 'Jeans & Pants',
                  icon: teens,
                },
                {
                  id: 1,
                  path: '/collection?category=capri',
                  label: 'Capri & Crop Pants',
                  icon: polo,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    name: 'Womens',
    path: '/',
    columns: {
      cover: womenImg,
      data: [
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/collection?category=top',
              label: 'Top',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=polo',
                  label: 'Polo',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=tees',
                  label: 'Teens',
                  icon: teens,
                },
                {
                  id: 1,
                  path: '/collection?category=shirt',
                  label: 'Shirt',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=sweater',
                  label: 'Sweaters',
                  icon: sweater,
                },
                {
                  id: 1,
                  path: '/collection?category=jacket',
                  label: 'Jackets',
                  icon: jackets,
                },
                {
                  id: 1,
                  path: '/collection?category=printed',
                  label: 'Print Teens',
                  icon: printed,
                },
              ],
            },
          ],
        },
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/collection?category=bottom',
              label: 'Bottom',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=shorts',
                  label: 'Shorts',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=jeans',
                  label: 'Jeans & Pants',
                  icon: teens,
                },
                {
                  id: 1,
                  path: '/collection?category=capri',
                  label: 'Capri & Crop Pants',
                  icon: polo,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    name: 'Junior',
    path: '/',
    columns: {
      cover: juniorImg,
      data: [
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/',
              label: 'Top',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=polo',
                  label: 'Polo',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=tees',
                  label: 'Teens',
                  icon: teens,
                },
                {
                  id: 1,
                  path: '/collection?category=shirt',
                  label: 'Shirt',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=sweater',
                  label: 'Sweaters',
                  icon: sweater,
                },
                {
                  id: 1,
                  path: '/collection?category=jacket',
                  label: 'Jackets',
                  icon: jackets,
                },
                {
                  id: 1,
                  path: '/collection?category=printed',
                  label: 'Print Teens',
                  icon: printed,
                },
              ],
            },
          ],
        },
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/',
              label: 'Bottom',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=shorts',
                  label: 'Shorts',
                  icon: polo,
                },
                {
                  id: 1,
                  path: '/collection?category=jeans',
                  label: 'Jeans & Pants',
                  icon: teens,
                },
                {
                  id: 1,
                  path: '/collection?category=capri',
                  label: 'Capri & Crop Pants',
                  icon: polo,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  // {
  //   id: 5,
  //   name: 'Shoes',
  //   path: '/collection?category=shoes',
  // },
  {
    id: 5,
    name: 'Accessories',
    path: '',
    columns: {
      cover: accessories,
      data: [
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/',
              label: 'Accessories',
              columnItemItems: [
                {
                  id: 1,
                  path: '/collection?category=socks',
                  label: 'Belt',
                  icon: belt,
                },
                {
                  id: 2,
                  path: '/collection?category=bag',
                  label: 'Bag',
                  icon: bag,
                },
                {
                  id: 3,
                  path: '/collection?category=socks',
                  label: 'Socks',
                  icon: socks,
                },
                {
                  id: 4,
                  path: '/collection?category=briefs',
                  label: 'Briefs',
                  icon: briefs,
                },
              ],
            },
          ],
        },
        {
          id: 1,
          columnItems: [
            {
              id: 1,
              path: '/',
              label: 'Accessories',
              columnItemItems: [
                {
                  id: 323,
                  path: '/collection?category=shoes',
                  label: 'Shoes',
                  icon: shoes,
                },
                {
                  id: 23,
                  path: '/collection?category=cap',
                  label: 'Cap',
                  icon: cap,
                },
                {
                  id: 234,
                  path: '/collection?category=innerwear',
                  label: 'Innerwear',
                  icon: innerwear,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    name: 'Factory Outlet',
    path: '/collection?category=factory',
  },
];
