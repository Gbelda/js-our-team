let team = [
    {
        name: 'Richard Hendricks',
        role: 'CEO',
        picture: '../../IMG/richard.png',
    },

    {
        name: 'Jared Dunn',
        role: 'Chief Operating Officer',
        picture: '../../IMG/jared.png'

    },
    {
        name: 'Dinesh Chugtai',
        role: 'Senior Programmer',
        picture: '../../IMG/dinesh.png'

    },
    {
        name: 'Bertram Gilfoyle',
        role: 'Senior Systems Architect',
        picture: '../../IMG/gilfoyle.png'

    },
    {
        name: 'Erlich Bachman',
        role: 'Board Member',
        picture: '../../IMG/erlich.png'

    }
]

for (const key in team) {

    const element = team[key];

    console.log(team[key]);
}
