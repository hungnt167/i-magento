import {document, console} from 'global';
import {storiesOf} from '@storybook/html';
import * as magento from './../dist/index'

storiesOf('i Magento', module)
    .add('catalogProductRepositoryV1GetGet', () => {

        const responseContainer = document.createElement('CODE');
        responseContainer.id = 'responseContainer';

        const urlInput = document.createElement('INPUT');
        urlInput.placeholder = 'Base URL';
        urlInput.value = 'http://pwa-pos.ezerway.com/index.php';
        const userInput = document.createElement('INPUT');
        userInput.placeholder = 'User Name';
        userInput.value = 'admin';
        const passwordInput = document.createElement('INPUT');
        passwordInput.placeholder = 'Password';
        passwordInput.type = 'password';
        passwordInput.value = 'Thuha105';


        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = 'Fetch';
        button.addEventListener('click', async e => {
            const basePath = `${urlInput.value}/rest/default`;
            const defaultConfiguration = new magento.Configuration({
                basePath
            });

            const integrationAdminTokenService = new magento.IntegrationAdminTokenServiceV1Api(
                defaultConfiguration,
                basePath,
                fetch
            );
            let accessToken = '';
            try {
                accessToken = await integrationAdminTokenService.integrationAdminTokenServiceV1CreateAdminAccessTokenPost({
                    username: userInput.value,
                    password: passwordInput.value,
                });
            } catch (e) {
                return alert(e.message);
            }

            let headers = {
                Authorization: `Bearer ${accessToken}`
            };

            const product24UG06 = await magento.CatalogProductRepositoryV1ApiFp()
                .catalogProductRepositoryV1GetGet(
                    '24-UG06',
                    false,
                    0,
                    false,
                    {
                        headers
                    },
                )(fetch, basePath);
            console.log(product24UG06);
            responseContainer.appendChild(document.createElement('HR'));
            responseContainer.append(JSON.stringify({
                name: product24UG06.name,
                sku: product24UG06.sku,
                price: product24UG06.price,
            }, 0, 2));

            const productRepository = new magento.CatalogProductRepositoryV1Api(
                defaultConfiguration,
                basePath,
                fetch
            );

            const product24UG07 =  await productRepository.catalogProductRepositoryV1GetGet(
                '24-UG07',
                false,
                0,
                false,
                {
                    headers
                }
            );
            console.log(product24UG07);
            responseContainer.appendChild(document.createElement('HR'));
            responseContainer.append(JSON.stringify({
                name: product24UG07.name,
                sku: product24UG07.sku,
                price: product24UG07.price,
            }, 0, 2));
        });


        const container = document.createElement('div');
        container.appendChild(urlInput);
        container.appendChild(document.createElement('BR'));
        container.appendChild(userInput);
        container.appendChild(document.createElement('BR'));
        container.appendChild(passwordInput);
        container.appendChild(document.createElement('BR'));
        container.appendChild(button);
        container.appendChild(responseContainer);
        return container;
    });
