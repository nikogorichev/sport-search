'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Photoplaces',
      [
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1481129260_4cf74d5d8209e1cf7a97f4418126dd78.jpg',
          place_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1441209883_86288aa909e6c510c1a0b406f12f7fc4.jpg',
          place_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1441209883_170b671f67ce4d1dde910ee652715891.jpg',
          place_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1636986241_53b0dc41f4de2c4e963f55a68b9ee442.jpg',
          place_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1636986237_17fe1978ae252f3b0cda46e83993cd2f.jpg',
          place_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1636986240_032d1cef8022eede236f11235f070876.jpg',
          place_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1630321272_caf1c6b9d82fa9cbb7cbd57f435e6352.jpg',
          place_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1630321276_a7ff8550826fe2ef9b12d0c173f90133.jpg',
          place_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1630321282_935c651c99e0cfbf984da434ca3d8896.jpg',
          place_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://peterburg2.ru/uploads/19/10/08/o_elcap_marathon_2019_085.JPG',
          place_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://peterburg2.ru/uploads/19/10/08/o_20190416-IMG_8370%20(1).JPG',
          place_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://peterburg2.ru/uploads/19/10/08/o_elcap_marathon_2019_135.JPG',
          place_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://peterburg2.ru/uploads/19/07/09/o_4.jpg',
          place_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://peterburg2.ru/uploads/19/07/09/o_2.jpg',
          place_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://peterburg2.ru/uploads/19/07/09/o_5.jpg',
          place_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://topspin-club.ru/img/table_rental.jpg',
          place_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://topspin-club.ru/img/gen_tt_adults.jpg',
          place_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://littleone.com/uploads/publication/992/_1200/6168a02137c2f1.89158813.jpg',
          place_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spbsvu.mil.ru/upload/site64/document_images/eecjcw-1200.jpg',
          place_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spbsvu.mil.ru/upload/site64/document_images/eecjcw-1200_2.jpg',
          place_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://chesspushkin.ru/images/glavnaya/doska.jpg',
          place_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1640173008_4c159982ab28e58eee80daa8fd4eb734.jpg',
          place_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1640173007_45ed84f4b83a76932f1d6fe58440087c.jpg',
          place_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://spb.findsport.ru/userfiles/images/620x365/1640173007_f855edd8501f474da0e093f417e6e7bc.jpg',
          place_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://res.cloudinary.com/guk/image/upload/v1573482960/stadion-kolomyagi-sport/uxrr42qbedsfvh2kjsj9.jpg',
          place_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://res.cloudinary.com/guk/image/upload/v1573482960/stadion-kolomyagi-sport/f7xmc7fhfwyjygv0juxj.jpg',
          place_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://res.cloudinary.com/guk/image/upload/v1573482960/stadion-kolomyagi-sport/rhfx1fltdcysksqjnzhz.jpg',
          place_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://res.cloudinary.com/guk/image/upload/v1573469005/stadion-politehnik/rpzdrsnduveq2xwmhhsa.jpg',
          place_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://res.cloudinary.com/guk/image/upload/v1573469007/stadion-politehnik/ls4tvvqpj3zklhzrsspp.jpg',
          place_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://res.cloudinary.com/guk/image/upload/v1573469007/stadion-politehnik/f1hzbcwqsppd9dwjbf9g.jpg',
          place_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://parkdubki.ru/wp-content/uploads/2018/11/volejbolnaya-ploshchadka-1.jpg',
          place_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://parkdubki.ru/wp-content/uploads/2018/11/volejbolnaya-ploshchadka-2.jpg',
          place_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://parkdubki.ru/wp-content/uploads/2018/12/DSC06557.jpg',
          place_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://directory.spb.ru/wp-content/uploads/2020/11/IMG_7536_big.jpg',
          place_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://directory.spb.ru/wp-content/uploads/2020/11/IMG_7518_1_big-1.jpg',
          place_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://directory.spb.ru/wp-content/uploads/2020/11/IMG_7522_big.jpg',
          place_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://thumb.tildacdn.com/tild3236-3230-4938-a432-623539323432/-/format/webp/2.jpg',
          place_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://thumb.tildacdn.com/tild3937-3430-4131-b437-333463383637/-/format/webp/photo.jpg',
          place_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          url: 'https://static.tildacdn.com/tild3038-3530-4561-b337-376634663437/photo.jpg',
          place_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photoplaces', null, {});
  }
};
