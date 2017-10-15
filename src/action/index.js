export const FETCH_MENU_ITEMS = 'FETCH_MENU_ITEMS';
export const FETCH_POSTS = 'FETCH_POSTS';

export function loadMenuItems() {
  return {
    type: FETCH_MENU_ITEMS,
    payload: { data: [
      {id: 1, name: 'Accueil', icon: 'fi-home', link: '/'},
      {id: 2, name: 'Services', icon: 'fi-list', link: 'services'},
      {id: 3, name: 'Outils', icon: 'fi-wrench', link: 'tools'},
      {id: 4, name: 'Contact', icon: 'fi-telephone', link: 'contact'},
      {id: 5, name: 'Admin', icon: 'fi-star', link: 'admin'}
    ]}
  };
}

export function loadPosts() {
  return {
    type: FETCH_POSTS,
    payload: { data: [
      {id: 1, title: 'Lancement officiel', content: '<p>Nous sommes en lancement! Ce qui veut dire que nous devons encore régler quelques technicalités avant d’être pleinement opérationnels, pour vous servir avec le plus grand plaisir. Toutefois, cela ne vous empêche pas de nous contacter pour prendre rendez-vous et évaluer vos besoins - toutes nos estimations sont gratuites. Alors n’hésitez pas à faire appel à nous pour des consultations en matière de redressement, de gestion et de développement.</p><p>Au plaisir de vous compter parmi nos heureux clients!</p>', image: ''}
    ]}
  };
}
