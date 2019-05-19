import {document, console} from 'global';
import {storiesOf} from '@storybook/html';
import * as magento from './../dist/index'

storiesOf('i Magento', module)
    .add('catalogProductRepositoryV1GetGet', () => {

        const responseContainer = document.createElement('CODE');
        responseContainer.id = 'responseContainer';


        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = 'Fetch';
        button.addEventListener('click', e => {
            let headers = {
                Authorization: 'Bearer cun0p1756l5cewrvvb33sdms89wko72v'
            };

            const defaultConfiguration = new magento.Configuration({
                basePath: ' http://magento230.develop/index.php/rest/default'
            });

            magento.CatalogProductRepositoryV1ApiFp()
                .catalogProductRepositoryV1GetGet(
                    '24-UG06',
                    false,
                    0,
                    false,
                    {
                        headers
                    },
                )
                (fetch).then(value => {
                console.log(value);
                responseContainer.appendChild(document.createElement('HR'));
                responseContainer.append(JSON.stringify(value, 0, 2))
            });

            const productRepository = new magento.CatalogProductRepositoryV1Api(
                defaultConfiguration,
                'http://magento230.develop/index.php/rest/default',
                fetch
            );

            productRepository.catalogProductRepositoryV1GetGet(
                '24-UG07',
                false,
                0,
                false,
                {
                    headers
                }
            ).then(value => {
                console.log(value);
                responseContainer.appendChild(document.createElement('HR'));
                responseContainer.append(JSON.stringify(value, 0, 2));
            });

        });


        const container = document.createElement('div');
        container.appendChild(button);
        container.appendChild(responseContainer);
        return container;
    });
