const fs = require('fs');

const readAPISchema = () => {
    let rawdata = fs.readFileSync('schema.json');
    let apiRoutes = JSON.parse(rawdata);
    generateStaticAPI(apiRoutes);
}

const generateStaticAPI = (APIRoutes) => {
    let path = './static';
    buildFolder( APIRoutes, path );
}

const buildFolder = ( APIRoutes, path ) => {
    if (!APIRoutes.hasOwnProperty('content'))
        return;
    return new Promise(res => {
        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) throw err;
            let paths = APIRoutes.content.map(e => {
                let nextPath = `${path}/${e.path}`;
                buildFile(e, nextPath);
                return {title: e.title, link: nextPath + '.json'};
            });
            res(paths);
        });
    });
}

const buildFile = async ( content, path ) => {
    let staticAPIData = {...content};
    staticAPIData['content'] = await buildFolder(content, path);
    fs.writeFile(path + '.json', JSON.stringify(staticAPIData), err => {
        if (err) throw err;
    });
   
}

readAPISchema();