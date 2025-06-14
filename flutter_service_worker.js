'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2b3c652f630da78e6c3ea0f68fd5146d",
"version.json": "08b01ac019985a3ea48b6538faee7d79",
"googleb91878f2b0f4b57b.html": "1a25392ae00397697039585d7d524fb2",
"index.html": "1669217e24278e136450bee0dc6b0fea",
"/": "1669217e24278e136450bee0dc6b0fea",
"logoOscuro3.jpeg": "a771cb7307db00586902f40ba9732fcc",
"main.dart.js": "d976a81c1f74fc433077fd5b2bc41d52",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "faacd44be1982116d883597b5324b70e",
"sitemap.xml": "a470af0380693d9eba35b32b1fd0c575",
".git/config": "b1c1b8d3d8158eed2e24660927b928c5",
".git/objects/0d/f54e6052972c6e0e6d6c869229d9c00ca30809": "053a37a72934ed8288514d67661cc440",
".git/objects/95/803070eb1d7c29d1113490a1d6016bf57c60c6": "f5c599430246b1028a0d42f4bce8e583",
".git/objects/95/0f69c026ad71d0436e1e52e3ebbc20a962a8c7": "05cf473fe09b893b1507f92264eff9c6",
".git/objects/59/f164bd8aaad4d579836bcaf33976725af59900": "68c3c1932ede238091cdeae0ebc66fa8",
".git/objects/59/a3754d92dcc732b8841be5e8e3c271efd2aa75": "6912ef969ba03996262e1471f9be05ce",
".git/objects/92/cc07ec6087551a6cab485c0fafabfe75591801": "17495bd7f13b53a0c159dfb1bc37e09b",
".git/objects/0c/bca88584fa4b9cc07332a5a73123b58b5e4cae": "53e509d54b290456fd48887874ea0109",
".git/objects/66/b3c120fb8037be74e574bb2c36eef73eed3c71": "498d69ccfa248ddd3f3a69994eedc675",
".git/objects/3e/d1030c22dc7cc2efafe862a02b8da6af1d6de8": "9175fa8f8a0c95f5d98b50dbc425f913",
".git/objects/3e/5db6cdcb32adcfed5c83316e38b615abd649ee": "33fabd3587148cba0a8ba5af4b18d363",
".git/objects/57/74fda3ec847bbb149773c249fa4a29e586141b": "f9836ba979fb901fffda0c2c366820bf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/3b/bf54800a4deace448559eac348d3726470e98c": "b7111a471e63c0122f0857801e103d99",
".git/objects/6f/8e727f857783812e6cfe8a6818a812ed9ccfc7": "46ae158f195e2c411c8830b468ba8a32",
".git/objects/03/903ff37309db9747c3f46d9bb66bc82a72d440": "156a854c2ce7ef1b6cc820b346d65ba9",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/9b/8f64a8882fbe2ec12e2966742e5f8580a0ca59": "e3c316e944cdfe968929c02fc8e08c4b",
".git/objects/04/042c2d480051ba6c419d187755b37a18c856dd": "65a336609ca10f84602d3b1719ca2ecb",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/35/515d33aff0386daaacb2cc7f69e57045ba34f7": "c1b79693699da8fcb584cb29d6a804b4",
".git/objects/69/d9d53a98a65fd26fc2a7553ebfc445008f7e81": "4fa5c2f74bcda9a41b94ca3b976666c3",
".git/objects/69/2a005a4df011067d152baf6095f8a189ab9d62": "31da7e548bdc9480487ad77f6499dd55",
".git/objects/69/8506eef6393ccc324ca9311d733f5f9108a87b": "9fb5a0cbbe95de34b1fab34eaba9e971",
".git/objects/3c/388d8888d8d6c9579c5a9d38dadcaac5d83265": "72391987a1896d98ffc4627391eec674",
".git/objects/3c/caa9b8e240452cd67d8fef34130ed2f5aba008": "a8bbbc836adb386b3f387c27d3428e4f",
".git/objects/56/4a767c05d72aba93e43d2f55f939399ff6b3cc": "5cb32a626358c2c08f002a72fa66e915",
".git/objects/56/ffc0fdd5151fb70ce51ec9ef2858fff629db72": "d055b4a37a5dc750f20318960b5ec962",
".git/objects/56/77d5b83c33a0b8879d93ea4d7e4c6f01110b3c": "92fe9cede1ef17dc3896eeab14bf243b",
".git/objects/51/5fab84449fb7aee98f20de65270b0cb33ca200": "b1a105f30654c25569bdd51700c55101",
".git/objects/51/750a395e720ff513047a8f20262ddb1887894c": "86fe92d7b2c199d7c79c9443f068ff6e",
".git/objects/51/acfdd0df5e3e812583485257a39b99b7b57649": "76bf9bbf5e71c1ed5edd42d4e19f47e4",
".git/objects/3d/3f7d3a511f11688a16deff9522c80fbd810b4e": "20d11f2e72722c129dd2a2ac37ae9590",
".git/objects/58/6b37797f504849a317e916a72d6b4a78556b04": "aee72fd4a6d421beafcebd6a0e88ff25",
".git/objects/58/c6fe4508582c8e6091e04d1d79497953a8c95a": "0e302bc8efd28835d5b5c7fda87382eb",
".git/objects/58/d905ff0bbd69fdb3c0aa03e65971b4bedd1da5": "246ad7e7a775e3d14991fb3ccd84985e",
".git/objects/0b/3cd434ca0570fc0dc231af9914c60d906f231b": "13eaa45e704bdf0d99ced2a0a6d65e23",
".git/objects/93/cbefc5f784d740fc66140fb0c8029585321d71": "9b934214fb6c4937fe0aa9a722fc8f73",
".git/objects/93/f8dd424c04db95a6e902390f95cb8cb082d241": "7b7abbdf1759726cab36c29c0a6b87a4",
".git/objects/0e/70f58c313849ae6fc730ae27847a135ca6d1a4": "e9ca0d83fcf4d0705c7cd18f8ca52f91",
".git/objects/60/de6590666afdbcdce3de4da1689537f0fe35ec": "f7b922a2e651e94c995bf9cbba9d5b24",
".git/objects/34/3b9c4db1fef22238d0c601f65031db43fa282b": "7a44477481dd9ab88c13f0b67c9a5230",
".git/objects/5a/8aa408bf51e01ff52221e38f52a5f438c6bf16": "dbf031186fb551b1a90ee5f218c1880b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/33/250091f24c5295a72969b6dbc0c75b0e1a4436": "26e7f6ed4b470c0d33fb36ec31620821",
".git/objects/33/2d5c6789fa18f579f23c5245e385527ce260fb": "8d89e9a0cbff119defa49049b69e34a2",
".git/objects/05/aa2553bb1b96091a02a3d31faf98087d0c1e5c": "2befd1a6d345854b7d67668666bf7e3f",
".git/objects/a4/49ed831dba71b8560c662df0d8ac7e99ece6a0": "ad182d1441001a8f80bf264cc160966b",
".git/objects/a4/cfc0805eb4f764611b0cea36fa4412056c0eaa": "bc884ee06c93295c1b3e3b6c78ce3907",
".git/objects/b5/080c7497af94c44c3e0b37ed6abb5c4a0a55c6": "3bbfd15e56f34a7eaf5a9dba552aa259",
".git/objects/b5/379d6e77fbfad10cad0ae3184363f6d1561036": "2bcc2fc27e9dd48ce53606e6dae10fb8",
".git/objects/b5/34e62892876c74035f6111e4dcbfbf38a6a119": "016934a28704f7856f5a685385339412",
".git/objects/b2/33807494f224cb23669cf75018b5db7aa1a282": "69fe971468efe527ef88f7f3b99d91fe",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/ad/dcf0ac0ca59241697e6c79f44a8cd8a7b80f50": "f1e42757a732917417bf78c4699391b0",
".git/objects/ad/c59941608374466c1c7362dca7ab8a1bea4ce7": "e458b748bc8c9b11196d490d3f093ee0",
".git/objects/bb/7b42ad9da66ed6b03f6ad7d506b7b24670e035": "dd6f12e58fc0c51a855830fca210860f",
".git/objects/bb/90f94e42fb1d8374a16547c9b02afc83d4bc50": "ff215b21216803566b5fda553648450e",
".git/objects/bb/35305d59001b88d5115ab44774318b3a7b16e3": "9a22b60bcc91a4f2c5e012e5fe7fcc21",
".git/objects/d0/155124915a88de8325dc134044e246b8cca06c": "71fa7f58e0c9448cb6c78ae573feca9c",
".git/objects/d0/b5c2c6c9888cc99313dec58cb7fcfe4c132bad": "45262e6d158b9cb6fbfadb566c84e23f",
".git/objects/be/55facd593ca22db1eec48b23a4300be2ef2867": "19e1762f95c64a49cf357c44bcdc9c23",
".git/objects/b3/65e980c02a44ac70a233dafb66d8c242dd7567": "369cbe211c3f31029bfd71efedb46159",
".git/objects/da/8c11fec6a18d6bdb251f212dc3ec65481df019": "a6fd38a63b0c0f83b0a739a53f6f7e17",
".git/objects/da/2700e91666603b0accbe1bcb5b7ddb2974a025": "745ffc2f2742cc98e57bcc85187125bb",
".git/objects/b4/21fa522259fe708babe7a165a8f4206a34f826": "f354ce6ad5e802fe5662c93236a1bc0a",
".git/objects/b4/15589f8ac5b33f8eb3b8bf208314fe0fb27673": "ba76cc9a49f74bf945401747bcd85931",
".git/objects/a2/bfa1a1224298dafb3f54abbf0c76183bfc5f13": "26fb598866addf5ff88c800884e7721b",
".git/objects/a2/f5882bda56a65ee450dd82827b1d7474a1bd0d": "08d82bcf2c86f2fc271d5d2d498b8ca9",
".git/objects/a5/bca3fbaf8bda69f18ce5d2c5d443f074489c9b": "8edd17e4994433568cca13c178ed3303",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d1/4ce31488c0f4013478d6469891d986b36fa5c4": "7c8bb90fd08572fd80eeb454b957aea4",
".git/objects/d1/a0cc3642c6108b077108828d62642e8b73982f": "0a43cb6e4a04ca31118be9f45fc70cff",
".git/objects/d6/5009e8e26f6e4388ecad7dc65a85ec46d01489": "d1fcc59de3c0d48337f004ba7db2d195",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/c4d3c27588a0e1e73345f7b1ae009e1fc3e7b4": "60b4bde8be7077cf4c45079b4bcbe89a",
".git/objects/bc/90d51cc1cedfc8cdbc779a3bf09ec4d73f60ab": "15a47ac635af4c5c67e2f0647bde71b3",
".git/objects/ae/7abfeb45d48884d75732a2f6976dd2abb1b22a": "aec31c8f8c1097e7846e74a37ab78276",
".git/objects/ae/0cf1c7ed01f7779d582e2c68ea8e49d2a9b98a": "73d71267335339558cb2f289740db4b6",
".git/objects/ae/8da2792e70af4823696c6ab01c2ab7b4e83ba5": "0cee650b43f7b7999b2a66fedc4999f0",
".git/objects/d8/174598816e0ce0fbf20528957b5cf48e38e827": "bdb43329dbcfa649f4ab06a7402299d5",
".git/objects/ab/1ca02d1b3ef175870bc5577358b2e40b2011d9": "2d1dfa0ee5d3ba9c7574694b32ba8755",
".git/objects/ab/3299926481c55f3e9e29c46c858bd155762c42": "954d310d600788e435b4a0fe5cf6b24d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/4f5f6ebaa15b1b638bd51268eb08896b2a39fd": "f7671eb520ec2b3887ca2fce209206e6",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "e1cbd762191a374ae8a1a8f54131b5c5",
".git/objects/c7/00251aa0d9440f8522e3f8299d331dc70f4faf": "8c4d92601353a4b9b7a3446b840a1d6a",
".git/objects/ee/314f778e0f303136789bfc03b8d68fe88e5101": "ddb69e224d9a0b8ea66bf0eade266798",
".git/objects/c9/4633b256effedb7ea5f26c280057a0332f421e": "52ca92506c1e52cbbafcee1938211e55",
".git/objects/fc/462f1dcfcfff81d126c628b27f21d524890050": "e3ff07bec8d098e44f1dd72dcc51ab38",
".git/objects/fc/6bcfda6574f920e49c242e36d743be11758b65": "dd337eb1fea395008bbfe37b12690319",
".git/objects/fd/1eab7d2ae4a7b6c54c6fe6479a80c8f91b66cb": "08fe70aa5d9349f953581a7412db566a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/04efa4533ee7393d206627889652d7feb6e880": "d5f003edd48aa5546f38c0ba558e586e",
".git/objects/f5/95133c99c6d8d34fc89fb9975be0e3ebae18ee": "62abf2689bbc1efa111634d2c162e033",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/f5/7f98c1470ca514dbf89bad71b5541c270f2992": "7be17641bd46f6095aee4cf95465a6c1",
".git/objects/e3/003423824a460c63435b87264afefa1e198c72": "6ebba9096bf4cfee520f61d5529d1400",
".git/objects/e3/560b2d8ad95b9dafeaaeabe3c5088dc828eb4b": "143d6d3287014840f41a3808337c6030",
".git/objects/ca/88dcbeb7e625da73149a145449afa31f7b3b6c": "5dbd5577a3b1eb74cf8176621cc5dc02",
".git/objects/ca/2b34ac5240cbcb898709cbcd66d9ce8066554d": "c3c3fdaac1be8e13c81a11bad578c8d6",
".git/objects/e4/8a04099698d6ee961f9029b2b3fe97e6f00136": "2d42cf8607cf95bf12095e83d1aad146",
".git/objects/fe/7087a7a2e8dd7586992a1030d92e469d713dcd": "fe06a6f532b113c64a9de629fad7fb08",
".git/objects/fe/e187572e3ae829a12b4d8d2466ed333ae17fa1": "6ff901915f7d2f51f878999dad19b54a",
".git/objects/fb/cf4ace0ba57ceb52eaa1991e08d76be050ca72": "7f9b50d747bffb5ce928917779e569d3",
".git/objects/c1/ed41e1689f0741ecbcba35e789c1782e3359e7": "9d8e5c19dad5712f24a5bf9ba14d87a1",
".git/objects/c1/36cbf6715998c75c752feac752e53fa7b210ac": "9aa46ead19d898f16b8f3b5d3b0be580",
".git/objects/c6/c3d20494f4d920efcd54e8e6a1c08debcc29dd": "8d69a7d9f8305535a86a88725c3f877f",
".git/objects/4e/69230aef568738dd9a112f3105778f6ccea79e": "2042c3f28a44be0a14f50c7a7445d71c",
".git/objects/4e/4a117d56727f40483e5dfb2e9640df7443c878": "521897fb7cff43570212214626f7dea3",
".git/objects/27/870bc0bd0c4f73a4478032099a2a0e7c37ae45": "aa4c1499be1f40a3c1731169623381ec",
".git/objects/4b/985281aed55d38f0a4f0dcd4395c706f5813b6": "2154443cddd9c9f6bec2d604ead0a085",
".git/objects/4b/ac02f2f46dcbf78fe25be1992785d749ae3bf5": "769d2b82cde6de0e2e456626d5b36d72",
".git/objects/4b/b57a3e936f42ffe673bdcdfaca9a0facd98f6e": "505b6ada5776607f4424a1eb5ef69ca0",
".git/objects/11/a115a300bf02a44da4206092cab3b4884fa87c": "0b5030dacc5e514f282f2adf3ec918f7",
".git/objects/11/a3a3871a880fcb4297bc5b70a26e9b9ecee8be": "d5b62e14361e17c95253d75d47e3341e",
".git/objects/11/1902710960cdce95edf0e12be09dec2dfb21ee": "e3a1cf404a5eb44a9a6d9fbe6d38d730",
".git/objects/29/5914e4e26aa4ac784f676d6ea109be768cce5a": "854be54d33258305bf543c4024dfd785",
".git/objects/7c/3c862e4f724a79241b5f7025ba6746f4cf280b": "85cccc89abdab1a9a6c397c31651d5fb",
".git/objects/7c/8cccb462e5e009a170fc87918fb8006b099d03": "ec961908dc1121238e710b44b0356d72",
".git/objects/7c/c6ea066aedf557cb6ceba96dfb12b98a07bd39": "df9d119a3462a0386c9609f789deb9ef",
".git/objects/89/1c64a452b6ce123e24cd0936bc528176a3749b": "876b11199347e5064e3e0356e5e403f2",
".git/objects/45/bc37fdcee84334548f0ba0f86e860961f34684": "c674efb40b23346665c029951ef163d4",
".git/objects/45/6fa5ba40f279d395d06341d55bcbea0b1d3d04": "fe895dcdaea4d2cf518584fcb2170942",
".git/objects/45/ab4a945e184760a149977cbb3c5c1194f871e2": "d0732a0324f794dda8249b5eacc08e45",
".git/objects/1f/97891abe5591d857f0f1eef6cd6dfae54a8006": "6a44c87d3f6a297894c749556ff224c2",
".git/objects/1f/426a0a6456a4175dc12fe7a3462bae789d6aba": "825920b52bd4de4d705fcb101da46b0f",
".git/objects/1f/e7a92f592aaa0d0b3e719acaf5bb2bf6fedbef": "c9fe560fcd6a98acb7e341689469a47c",
".git/objects/73/6f5753f04544ada1fe477897be50fea20f5e32": "27956501301da59bc4b77b43d8a09910",
".git/objects/73/e86f25fd7b391a2016c7ad0466f8943e545f9d": "cdd0da16dbe9b04dc006d5e77a75da4b",
".git/objects/87/2f27244b60fd99b869cf020cf420d91ce778ec": "15716c524a1f67f12c5014f73ecde450",
".git/objects/80/2aaca2cbb5ca705fda8881837134cbe4ad73c7": "fffba991c13ed10314cabb4d0eba6e10",
".git/objects/80/16d334dfecc62f3302ec04ad0800efc835889e": "3e3aa9840235ab8ae13bbe5398821510",
".git/objects/80/67e75a12878084cc2b6f95f5e0c6c746c47a19": "f99b2cd94f482f64b3fe43ed470526c7",
".git/objects/74/1083bd220b0ad1bc788af29350cbbfd53935f9": "dcc6420290634fd69f9bee81a46ad53e",
".git/objects/74/c0cd7673aa0fd1c1abd2c724c557d4b2b480d5": "dd2e5789902ed61aaab414d3a85ebea2",
".git/objects/74/92cf2d6958676bdfe582713952f2168cb3620b": "9fd336bbad0fbd593f8aa86ad14fbe00",
".git/objects/1a/5ae43c6d3d5d9ff0a6d88b0ae4bff946650f19": "eae8dfec935554f2f500cd427a872762",
".git/objects/28/d08450688ceedd9abe60dfbb8c6904de2dfd9c": "d5c797f13fb103fcbab0b345ae7f7092",
".git/objects/17/08d1a29865b7d2e31f90c7dec9c644ffb1289b": "52c5ec1997cf1f0d1b53ad8c3bfbbde4",
".git/objects/8f/b1c2e9c1440c97c7d594538538a0e82abeb8f5": "804fbb85f5ea2ea9e696c41adcbe7d10",
".git/objects/8a/389615052fb698b1d4307a7cb3cc2477935634": "2e7145749fc70f243c7fce32499b02b9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/7530bb23e9667df73249edf2ee34e661d32a07": "ed6771817eb84cc336d7189e601fbc91",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/0c61719e3d2f098471122445a762740adecb79": "9fcb1b7c758b2ba305e2a63d68403ea4",
".git/objects/19/776f832eeef6f54c987850d16b1d07b6383dfe": "56ea825d6e20399cce682e8e8a2677f5",
".git/objects/26/b29b9f68911d8a76f759c4942e119fec37d239": "362a3b323b04bd62ff3bd580f88eb829",
".git/objects/26/a6bc6ef8d54b599a69a2d8e3c8f552226f81fd": "a2554def4870c99d99d54ba141dae0e3",
".git/objects/26/052a9aada3dad54582f835229cb3e6c623adb6": "b59f89a90b7e08467efc1804a2d5f307",
".git/objects/26/ec3892a7ed6660095897d95bedcb5c281b49e2": "f4e0eb875d1e4e2ae9bfb5b279d51109",
".git/objects/21/9b0885267140caca10ba25551543def8a3d83c": "82e902c5d2e4eb1c8dd55bccab43d635",
".git/objects/21/33712c41b675a8b412f389dc4d18185e8e3f29": "e308be425488ece7e36fb3312baa44c4",
".git/objects/21/72caec39c5f819b48535c52e93e5020c48c670": "498e51611a91d10db5f26a4d00758688",
".git/objects/4d/c162e92f1b0d4c4f6662bbf9f589360fb02c5f": "1892659bbed03bba825f74032f5f9820",
".git/objects/75/2ea4308c4bb422086f15e23ef8ce6599c1c64b": "eb97b830307f7e5875d09914d2380298",
".git/objects/81/288b0dc2a5ca5a042ee35ae5e55b6902a4439d": "3cddb45791ba53f609ab6cb2232aca5f",
".git/objects/86/1cb0c1ddb98bf94dc4176dc25112176ce0c565": "3b8f617f80aad709758b5892e2291a73",
".git/objects/86/6501a22de88d046af5e729672970a7252fef16": "24082441a44d68017ca35626b7241a35",
".git/objects/72/ef0b0d487695bc003d855a0dde8ba401a919c2": "96dfa0165d4cdabd25b593bf5cab8e82",
".git/objects/72/78fbc817c2d368a85e61d72d14bbea48725ad4": "fc21340f2355a7bcf446de35454af5ba",
".git/objects/44/0afb0a89405e1f91a7c8544b7efa211880dcfe": "fae9c687cecd0dc207e01b599208b632",
".git/objects/2a/4dad62d647bfa2048733fcd14de965c5086948": "2ff934099e1298bb3e3f0a0b7cf3c39e",
".git/objects/2a/0b742b6dbcb5369a8fb30e0837c3fee8c42f7f": "a9e24a15a1101dab9c5367f31b916f10",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/88/6a7136876f2950f70dd5581778cc70b30c8bea": "4511a68e6affe22837d7b4c8194df0fd",
".git/objects/88/3c82c66fa633a389d1f6b6c5a316a9d76b7688": "9659096617de43082c6dc821dcda5388",
".git/objects/9f/e644345b5485ddef7e1214f96051c65d70e85b": "8409cad7ff534ab42bd56c3bf314aaad",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/07/6074cf9e76c32edfdafee124525b7e1af85fa9": "9af8ce53c50c633b49735cb4e3f8a42d",
".git/objects/07/73a9748b8c2fe9dfaf3790267603713d8bf85e": "21a9ef1fbaca3b8218b606765f9cfdda",
".git/objects/38/dc7f96b510a7d5d58b2ca8eea5f45c9c00c42e": "7c6a05f64c6d8d737ded87bbb4dc6e67",
".git/objects/38/a79316f8536b44ba7d73ab6fd488b74304cd00": "22ff1deb788cb41ceb1c75ea2e3cf883",
".git/objects/00/3044670bfdfe853060827f371381c417e4d457": "caf5ec5bc46961a4bccd96011115bc41",
".git/objects/6e/c58887a2ed2fd0c9759af3d883845b6a0ced69": "aabdbd36095c19bd2693dc4794d4aee7",
".git/objects/6e/1de68ffeabe260f6f0ad5f5ef3581df3f35ad8": "f71c699d1c2d9e9f6fc688f2614f8883",
".git/objects/36/df436d5e1eab01f362b0c8bf272a73c5d51bb4": "1bbc564ca68889987c7c1e0b53445bbb",
".git/objects/36/090411ca4c14d92e886d75c780b8ca865f8049": "738ea77c699285675188ddd94d6f2a72",
".git/objects/5c/07aa21c49f5605149b6c796452bf24f06d28d4": "2f2e6cfcb8d314b7b587c144d7c0c83a",
".git/objects/5c/65c70fe32ef51e45c7a367d8c146ca14bb2646": "230e48908694388ba010d004c639818a",
".git/objects/5c/5526682a029eadc374584c1dddc260a16d21ff": "5301b5c7837252c4fafbe4a2cd3f1cb0",
".git/objects/09/2fcaba033f5769d1d3c3d9c806269995a22d64": "08115abc5cf548fc41ae48315b13c722",
".git/objects/09/a1187884fa38fa6aef4da6e9bbdf0e344e6230": "ba921fb5513817a28c071dcc2ce1de97",
".git/objects/5d/595bae9a92ac20406eb7f393e6921679d9054f": "db4cf920fb5b6237001197a144009509",
".git/objects/5d/1ae3adab126b813996de20da963a8bdea9b7f9": "143118f0e88fec04595ffe1a50f6fb1a",
".git/objects/5d/c70c827778ebef57521509b10a998c0a1134bb": "e90476ad7696d1cc06a3c2115e766535",
".git/objects/5d/50dbf486a70365b4b55e1442b29185c2058360": "1fb70b569f59faae0acd6b0003015e37",
".git/objects/31/7a010311d335186fe3a2a7f440df93c3111c9d": "8f2c13e7efbff92cef5cfa382aa943b6",
".git/objects/91/5ba9d97970b319891723355ee2df6ce5a6bd5b": "70c35592403fd72c5bda01e66be17c31",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/91/978386bf2359dd322c757c4c80717748a66bc1": "e867270eb3d0db7b113ced78d8d453eb",
".git/objects/91/1f120f4e153fcf2002450f566b9dd4584bbf0d": "650d17d71e0ac0ae45de49dca2ff1537",
".git/objects/91/ab463eb07b103f61c967c56d43455cd1aa31ce": "523961eb217a69f110f98836f84fc7ac",
".git/objects/65/200095f28331750fdbd96ea5695e93539ba305": "ab6c9f81193c068b2b062b95715a079e",
".git/objects/96/9bee5c9b0d5585f041e2dbb87ee72749864645": "c04b40d91451e5f5d91d2a02465da396",
".git/objects/3a/3145d535bb816e762452659f6f91ce8d30c76b": "9065bf1a37d67b8a6cba06d631cdb7a8",
".git/objects/3a/37a07c8c929729051b17f75e062011156c26b7": "3ab3b121a790cf9c6226b0db79f79163",
".git/objects/54/195dc3b558a10f102310b1a56120efb48c00e5": "2772c442e72156d0d17fdb09a39e5f11",
".git/objects/98/5dd21f0691ff45efbdcec1304bef3fd5ddb7c3": "d0e52382e011b6ffe9b036d17f97df38",
".git/objects/53/5486a570cf5238819adaa260834d3c9687c4d3": "095057825e78e6a60b677ddc17a87444",
".git/objects/53/b314ea516d8457b538a42297669e7ad6edbc1d": "bc1cb89b4ce4da8db5e1b7ed9c4e4492",
".git/objects/53/0285e98c769788076dc81e4733be06cd021aff": "54f2f1b895c39f8dd285c7b3f8518441",
".git/objects/3f/3889c22b984ca3cea28c3c5d49e8d1da1fe73a": "b80d86d771a8aa2ad5c57813cf4ff7e0",
".git/objects/5e/2248391859097f807749966b185d175edb17b5": "8f442b7d575230888b567d67f18bcc43",
".git/objects/5e/3b46ef13517c0e344cdd332020a77cc3fa0472": "bb2b287f2bbbd3f35623398229d83ed5",
".git/objects/5e/4394c00fa1fccec4d17c17d15a949dadb091eb": "2610d0ef49ad3fe09b0b35e63f49f217",
".git/objects/5b/0a85fb768fdd536ec28d4db066610463b4da9c": "f3fb22f4a75728429228464384c52951",
".git/objects/37/6b81422116e0ca8b74c4b1ef9bc9852c2f8273": "ec574e7a0bc3ffec90733c74a5ed5a35",
".git/objects/37/21ff64034cda4d0ee4f8c1f941155b602951c8": "2ccbdad9fd8db9a8b646cc79869eb0bd",
".git/objects/37/7013760fbe89caa0bc30a4ab55acf118622d8e": "f48cc28a8638a8f5f75f8a1d17dc0dda",
".git/objects/08/01ef38d8b833536f6d51f04fbccfa20a909d2d": "17cc7ea11e5c89250bfd8560f49abecf",
".git/objects/6d/38a1b5374358609fe45bdf09c8e10feb140d27": "9779d72883b1702099575c4e34a848d4",
".git/objects/6d/e6a74e4d70ff613c157deeffe8477bf12f116d": "e49838a5c2fe71f4cc941436ad5e532a",
".git/objects/6d/4de6ddc0b0391f30b4ac4082cade6af555ea39": "fc662a29f8eea7bfe3bbec839a7fa106",
".git/objects/01/e9a2eda85c13e937128243f765da85f2c17528": "e0a53c073b2e404ee4a8fb41fa222f2c",
".git/objects/01/567ca1181a9b1460a982f5c6893d6b9370df81": "fe68f138e2302ed49fbcb8374df3333c",
".git/objects/01/289e0c61a831edee86422629defb9c6f472595": "fd34b517721ec1accafafa5f75a02af0",
".git/objects/06/46c4a32fc13141d5a09df1edf7e338d94cf96c": "59124d11b6a07ad8d4f45cab6efe6f04",
".git/objects/39/caad153eadbd680984787023438c304a87e43a": "ad569bbb9b9704d902ffd1e88716c77b",
".git/objects/55/b9c3462b4c8c93e9d4707cc189111124cb13ee": "460a9fa14dbc6e63082639fb95793bee",
".git/objects/97/cb239c562c6df0ca7f90e93b494f3c9720e2bf": "57b66e348e85a90501aa5b64915904f4",
".git/objects/0f/494133327d5a3c3688397b47d817478b2a99ec": "92eb11a5035d95b7e250832bd3daa6ba",
".git/objects/0f/80b84dc88787f7eef344b4e4f3a388693792dd": "4256406ea580973ef7db0a873217dd17",
".git/objects/0f/4077745c7e49cc9562c5385b27d221f4768511": "6a2787de57616d653e07be91a9bd5a19",
".git/objects/0f/ba93e53282aba539fb8fdff276e5cb351b2bb6": "a933aa321e5811e75ab8ea4eb91a6855",
".git/objects/0a/1286d9b580d35af1d35307b02fef88cadea24e": "87a6c8357a675b551369a310922fc63f",
".git/objects/0a/4bc4b35ba8f7527011c60b61d4580cb8ad2e01": "6a12f7e1a1f87596024245822542c761",
".git/objects/64/3099eceddd331433f22e74a21017b1853ce81e": "a0fe502052aee12488269bb8547569a4",
".git/objects/64/75960171661a18c1ea000b408e41a0f8864b37": "e5eb02e78fa328bb5a15a77e8b3d1b3b",
".git/objects/bf/c8b9d88469daf3c6154502d93b93272566e9f3": "4d7fc728f84952a846a43629ce699aef",
".git/objects/d3/399ca9270fe3d2ed90c7601bbefbffc49180ad": "bcf112041f8670aebc1bb1faf5298660",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/27c9c8813fa76c2d93d67cf4d6dcf9ebcc07e6": "5e07a07944df722736780135faf69fa6",
".git/objects/ba/67196e4854214ed5e8a0a1a34ab8a0720429c9": "ed7647626d4d33e9902dd881e4dda13c",
".git/objects/a0/f336f9f7884f88efe636a9880877961b4b3543": "3266d7f6406ff415f02cdafa99ae58b1",
".git/objects/a0/117ab03dc027ba06a751f1121c0569048bbdd7": "74c1f69a7667d411585ec7d722db5876",
".git/objects/a0/17792d87f8857ae603fe51085811693cf5946e": "4f3a6b3e9e7ba6e4fe275e0317a04ae1",
".git/objects/dd/30c02fe4140438e63ca22a6403c0eb387db212": "66723b0ab9cc6de32a04988aef6ab765",
".git/objects/dd/dcbe64d4af0ee56e2ecf5527f0cb25bf61ee57": "4085dad614d9b8e9906f91e45f320bb9",
".git/objects/dc/508baf399cfbea32f51b9542fe69f91cfae884": "32bd74a0b35702588e7b68155321149b",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/b6/3555b92b93b8ada9a6bcac773dc7f41c40b404": "dd5a9cfcbb52bd6979806c642591dcb8",
".git/objects/a9/081339b65204b7f70434cb5032caba54e6ab78": "81a8f83836fc081c8afb67da4f43382a",
".git/objects/d5/eb0b7c1080a18bcb0afec982646f67389608c4": "f9dc5499d2af6c45754f819d9b34ddc8",
".git/objects/d5/703d36931966febb5dcb885fbcfd7f559233f0": "9105650389e8acf99927ff3f7b9d06cb",
".git/objects/d5/224ed452085f4b893040941a537736a8a7265d": "3df9e0cd9d693b586f2448f191f4eb49",
".git/objects/d5/fe2def35144c950672a2976fb207d58fed8f8a": "ecd09171e46e32a64e1f11a75a57578f",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "a826ac8bab9ab62d170be6b714e1a207",
".git/objects/d2/f30b0adb37a8217e943b925516987790b45b9f": "7df975afd89f1b1c3fedf88b420fd4a2",
".git/objects/aa/feeb3f4da54c71529f46a5ca34658706f9f22c": "a672f5adb9fbb949b70d62db7ce774ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b7/b2b472ac33fc1e8e566f0d35a4f485e1967029": "5269809feea411996d579a050e4728ff",
".git/objects/db/93c232ada74b49c378209ccf90d40225021384": "a2f841b384484689e601dce7613c3a03",
".git/objects/db/975b4fef9c6879218a283decc776494818c023": "34e08c04137823f2c3a6953206083e91",
".git/objects/a8/02aa415a1dd6b3b9a5b768742ad17873429b81": "ff378cddc3900990072a3c22ac388c32",
".git/objects/a8/ed232e0a53377025ce372e646e6f44d1b65e01": "1b2d2b5c6169d904e9680171e67861bf",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/de/3341a5004e537d681085c3cdeddf0b1dcdb888": "07e1caa7ed97648bc172d3f630c5daa1",
".git/objects/a6/599c3ab4caecdc885db3afcdedc5c91e37ea19": "88586a8db8ec4c7dd951591ac93bb978",
".git/objects/a6/ee0e5e83bb02ec05a785e39b00a5023c8ee928": "fb8a544a322a853501bb15495903987f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/780a555459cf389fe343761b596044c8a825e1": "210bbe159b8fcce64f45bf9d5f57ecca",
".git/objects/ef/c0f60025342b9b924ad8af1a9ccec709289c35": "afa09cd5ea380c8bc48fe4c3ed0228db",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/ef/0074d1b181efdd0cbdc0e0624dba84e8011c8a": "5075af26f184db0c78f1f15091849599",
".git/objects/c3/09b73fb45ff6c7e13ab2f7cc8359d4ccd6f5b6": "0f696d39ddc17b2f1835f4e626d38ca4",
".git/objects/c3/473e42efcc09779124ef11f3eb93a4f61a4ab7": "9f8831864cf5cac713340517a9233736",
".git/objects/c4/ea0e738f191102f1249668e47ecf9733b823d7": "75281fbf012dd52e87555d1a506cd5d1",
".git/objects/c4/1d3c6bd585efe90ea75000735160b36ce887c0": "3045181854dd8dfc882f708592241d9b",
".git/objects/ea/99f8990de53d7085fb9fc704ad2b2728a7c700": "e71f728bd50e2861704153bf13c01254",
".git/objects/ea/d890536eddcd4cf47e35ace2f97df2a9c0897e": "5dfa49d8fe44b0a363a7b8dbc60f68b1",
".git/objects/ea/b68fbeae73fe8afdd1372256c23ddfa0395853": "153e5f75cb65115c9282cead2ace3e68",
".git/objects/e1/4a8be05a28da9aaf22f9582e4cd635feaf4860": "68371614ddd20f51c2a3f07cbd1cf4d2",
".git/objects/cc/96b9ae6a90a16b570732cb436fdad563325fd6": "d7b2c0a255193ebc6d7bc732df086b50",
".git/objects/e6/c0d3c40b213456436b84c07a10816e2cdbe495": "fd5b07bdac38cb8c3790f4fc35d3a946",
".git/objects/e6/3cf2f01eeab3eecdda8adf9d4d5ebd1d43b3f2": "2689243538419912692183b5cdfd5de8",
".git/objects/f9/948a6b547af188844ba7c53413a073c946c759": "a2d78ccbb4124f6f9fb461a96d9d444b",
".git/objects/f9/95c2a241656f6ddbb9a7352b84d890535d1a7d": "e2069b81dfe7a5bb80b815de230057e9",
".git/objects/f9/1e279adb186b1aae47ba0ef6e35f61d2298292": "963f8992033aeb6d76da059f6333ccbc",
".git/objects/e8/02439b33ed5f11ac82e4e63127e9c4f6b64185": "4a1c0023c910931cf88c357634a53dda",
".git/objects/fa/38aaa51bcc71813b925b6922907499d77efb35": "fd93e964f8b13159ce5eab90aa0acaad",
".git/objects/fa/c93667ce84ea4766d6c78b5bdd77773d33000d": "c9699a8f5b2282f02b2f9c97f9b157b7",
".git/objects/c2/62eb0c02194a5a14ced4afa37e26444d4ec18f": "f2d6049a1d523e40909723aba2015c3f",
".git/objects/c2/1400352cc9ee3e9b0edc896f6be94d89947d3c": "06ae7004bcd817054d63f4209c240b61",
".git/objects/f6/28d6e2a72455b0f30a237f241de4bc2849858d": "4c47f22dabf12af109f8fcd8477936cf",
".git/objects/e9/11bf0d43718a1607878d0ef403f2082d41f96a": "e618990b62e103f60e9abd1f961a78a7",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/e9/c4f89653e798c675ae7b8c994ffcfd977ac72b": "12e1d3442df3d251df3759da4b95aaed",
".git/objects/f1/802467a9734639f34f772b5541fc0e84d5cd2f": "c25af30891a8aacfda947de5fcc3b00b",
".git/objects/f1/18db2ea7d417205a7ff9bb3fd11323816f9bf1": "1f4fa6677b18e9b5fa7541d306317e81",
".git/objects/e7/a154da29499089d2ab219a69622e60eeef87fb": "ea2d5251440525cd980aca4c7507eef3",
".git/objects/f8/64ff066f17fb664bb5f7ddd40e518cf7fe636e": "d862df675ac496b474a64feae73c4349",
".git/objects/f8/b13c06db951b44bdc37107d28eb4fda8fcbe1a": "7034684f50f206773b2bd60e97caa632",
".git/objects/f8/fb08e7118470f5512bc172b5f2e500452bda5b": "408e1eec1793659e945de25223363fb0",
".git/objects/ce/9af304a007bf08bc966fc5bd39b2a3588a6a2b": "9b1651ed103c0cdb6c85a29e440eee09",
".git/objects/2c/50c2a6a9b109a9c6f984ccb990d8a7c00291c2": "5e4aca8ff87b4daebc68419fe1192ca7",
".git/objects/79/c4d3c14250555a5c8696f75b42151db7df7923": "f87cd91054b9e8d1509f4987a2ef91e9",
".git/objects/2d/be47f7985e5a43904595d178bc05c6ec8c6b64": "99d582823bcfe78d3c5aa11d07c60dde",
".git/objects/2d/b7f83056edb7fa14e8414991d2e21b8306f913": "27acd5449aa54c1f61f37cfc19a8a41a",
".git/objects/83/e0c580c14905cd6e4d33fadc8e7a593b5be31b": "08aa1fdfa1478ac648ace7ba21ea21d5",
".git/objects/1b/4981309238583992920eaea6ac76bacf43a94b": "c0e6a680f9e4f4e4ce0beab11576bc97",
".git/objects/48/4d86a0b9f1355e2960dd6e1d6204a7e6d58134": "fee94d5a5e01abe9785b0a57962f5eb0",
".git/objects/1e/cdfaec133d9c5f449d62e43e172f3290185225": "930eabc06177e18feb6b2d343aede92d",
".git/objects/4a/9139e2100ecf530201fbc6a0c40968138da5cc": "51d2b0352345e74047f687b702c2eab3",
".git/objects/23/0d5b720ec9caa3c8df8ce42d064b1ad7b12335": "cff20ff367b8bba3a6c88304d1b7bc72",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/4f/09906b737e27a7fc47949ba8ed307233536f26": "6943473a1c6265d3565a73b4676637de",
".git/objects/4f/afad3cf2c943dca223b3a5fab5da87c3ba3e35": "21cc6771ef06ee3e17cb5a3fe0882e1a",
".git/objects/8c/c57968c221690fc6ead1196d6904d5f58437b3": "79b0e9b37da458a88765a8301b281c25",
".git/objects/85/b4898fcf1c1376e3ff9820f0f6422fc702b0d2": "a2864e478df6abd6c93366774f9d0475",
".git/objects/71/461b184fd5471e35be31fd607692798d330df3": "d75e3dddffc96b0c1447dd3b8c392d97",
".git/objects/71/88887132e856c439fd353ca93d8b3fa5d15d2b": "f25819782e35611a540acf146b3ec554",
".git/objects/71/71292ba4dc30ed134b4b296e8b109a8b336013": "ee9daef262c0fdc1c20e04d5a06ea5ed",
".git/objects/1c/0ffe064974bcd67fa5bbe5ad933eed7f96d5ea": "1e892b8f472d63b5d60e2ecf2288ed6a",
".git/objects/1c/9db8829f113c5215d8ef194912d07d5639d679": "803e13646728800c084b2a01e0f0496b",
".git/objects/1c/b68a48f192a9bb03687655d825a7435bcdf4f1": "c88079b4da2f068b06be2fb096d737da",
".git/objects/82/4d63a12038a860745537f8481ede151a17080c": "64364116a218ec762a04c4d80d580b64",
".git/objects/49/8f0990a47808c511397bf16fb9f35b72d9668a": "7c2a49dcfbdbda12b72fb8fa7b52ea79",
".git/objects/49/d3902034fed40a4fec87d2ddba1659d631bcdb": "f9a62f8f69077938961fe03e53f2d1ad",
".git/objects/49/6b22e48634b30d9866be3635dc468a512ee3e8": "6a3f1962d1946ac1e78a7c8793317e0a",
".git/objects/49/e021ce5aae99ad5cd2fa59276d2c31a3b5bfa2": "b6f01713d058713aa95f4541e7930f99",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/2b/ddcf0e716baad4944c6d8546aa883fcee5d21f": "4b71d2f826bbab1b2814db76f6abee85",
".git/objects/2b/9ef40880d845fe265005a3b1f76fa16606f877": "2ceaa03ca1c31970a3174bb12a50fe0a",
".git/objects/47/86bd8c0283d2a8e1f675efa1201142cb72e75e": "0528a22bdb24acb0ecd8d2474373d463",
".git/objects/78/62cad87aa091788cbfae54e308f29e9284f2bb": "8971ed0229bf7a8612f21f96fab9fe92",
".git/objects/13/ae7762c887997f261cbac43c71edff8faa3357": "e33c070dbccf1ed3af82b81f7e66b405",
".git/objects/13/7865193b9bcc81ff539816fa83ec48e54472fe": "18ec266b6498968cc34cb2f968475d45",
".git/objects/7a/454df247ea6fb42e835d62fa3b85f39416a47b": "5a666942b0689c4b857175e8fe5bf241",
".git/objects/25/e6f03f3a2c5ce99520401c1957204ba3f17eb5": "5f16c3c714047c8d2fceb2e82434a213",
".git/objects/25/fa7c341e51f9829a7fe5255ec40bf79386fc6a": "e6f4b6f31a6db599e5e58560fcccc566",
".git/objects/25/af991274f2abbce17e8129153d95bbc8553914": "07b3a49dcf881917590e4df78024cfb6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f17b2678f3b7c5edcfeb549d9ed70316",
".git/logs/refs/heads/main": "50aa3012100b498f790642555453a9c9",
".git/logs/refs/remotes/origin/main": "a84600f30edfe6e593e01c6c5bae85f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c30d5f80743acb744a5327be5dd9ae2a",
".git/refs/remotes/origin/main": "c30d5f80743acb744a5327be5dd9ae2a",
".git/index": "80f381b563a92ef901fb822488fb3803",
".git/COMMIT_EDITMSG": "936b9fa1a3b9172fd554e165f8c386a0",
".git/FETCH_HEAD": "719ea28a3c422b3206f450f0c3c93c0c",
"assets/AssetManifest.json": "66faee39bcf8befefaf5b53bfe782a03",
"assets/NOTICES": "f6062a4a7c48f0060ce38f171e3055df",
"assets/FontManifest.json": "2156ad94090fb03fc389e4fd460ec861",
"assets/AssetManifest.bin.json": "f4f4c8c9539da33429aac6ca44719915",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_multi_formatter/flags/png/tg.png": "ae49203ef3de781e34c2b1ab072b18bb",
"assets/packages/flutter_multi_formatter/flags/png/me.png": "451723e36ee8fb7052985302601f0ee7",
"assets/packages/flutter_multi_formatter/flags/png/la.png": "8437e3b007e993d0689452dbef8dec5a",
"assets/packages/flutter_multi_formatter/flags/png/mr.png": "c290de341ec04121f81f1d92128f65b3",
"assets/packages/flutter_multi_formatter/flags/png/ni.png": "41e2831687e9997fa4d5f4eb0700cc84",
"assets/packages/flutter_multi_formatter/flags/png/lv.png": "4370f6f09eecc21db000bd09191f3ff3",
"assets/packages/flutter_multi_formatter/flags/png/om.png": "b16ebc34417eb7a6ad7ed0e3c79a71c0",
"assets/packages/flutter_multi_formatter/flags/png/af.png": "aca8b607d5f7f7de283db4a20ca3f845",
"assets/packages/flutter_multi_formatter/flags/png/cy.png": "0a99780a720e253aac2e45e476458ba8",
"assets/packages/flutter_multi_formatter/flags/png/bj.png": "6a699b2a3de19ea9cbe7742a7eb742b6",
"assets/packages/flutter_multi_formatter/flags/png/aq.png": "d18febf275fd13385c1915ab0165af86",
"assets/packages/flutter_multi_formatter/flags/png/cn.png": "9d1e0784dcefa3513fb60071df2e04b8",
"assets/packages/flutter_multi_formatter/flags/png/gb-sct.png": "58267a46e412d0e2e92d76b00f3bddb5",
"assets/packages/flutter_multi_formatter/flags/png/co.png": "1f1228902d0fd2b6fd23d5ead00860d3",
"assets/packages/flutter_multi_formatter/flags/png/cx.png": "d5a6ca51e490d03b06a647d652d3fdb0",
"assets/packages/flutter_multi_formatter/flags/png/ag.png": "62c9310edb9dc04193b3a24b4edce8e2",
"assets/packages/flutter_multi_formatter/flags/png/ms.png": "438b3ae48465543239a679ef915378de",
"assets/packages/flutter_multi_formatter/flags/png/md.png": "d579fff3f3b7644d54cdad3fbcdd501e",
"assets/packages/flutter_multi_formatter/flags/png/zm.png": "7d304f13f136589bd6f825c07237676c",
"assets/packages/flutter_multi_formatter/flags/png/vn.png": "0feb7f0e73d4d3802e45cfb1bb1544c6",
"assets/packages/flutter_multi_formatter/flags/png/tf.png": "5cc7bee04686cd239815544e4c75a254",
"assets/packages/flutter_multi_formatter/flags/png/td.png": "11d75e01b66659fe74372765f7c82521",
"assets/packages/flutter_multi_formatter/flags/png/yt.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/lb.png": "46b6c0d58c4b99070e190ce95a7250eb",
"assets/packages/flutter_multi_formatter/flags/png/mf.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/lu.png": "31349218e6c2a6e900a3a83baa8f61d2",
"assets/packages/flutter_multi_formatter/flags/png/mq.png": "ae9ad4364a913e81c9787560c3b167fd",
"assets/packages/flutter_multi_formatter/flags/png/cz.png": "bbafde1489e7a263006c9c6dbf878743",
"assets/packages/flutter_multi_formatter/flags/png/ae.png": "1439ab85e1ef23242fe7885da8a19091",
"assets/packages/flutter_multi_formatter/flags/png/cm.png": "2f8725d49955a64285d7bbd2bff02e2d",
"assets/packages/flutter_multi_formatter/flags/png/bi.png": "2c1d426f4b941b9638303c34145ba672",
"assets/packages/flutter_multi_formatter/flags/png/ar.png": "0836bad77d30f355fc2064f6df069b8c",
"assets/packages/flutter_multi_formatter/flags/png/as.png": "d3ee7d8aeade5f87a5ab6ea1c53c1181",
"assets/packages/flutter_multi_formatter/flags/png/bh.png": "7533d290739c20bd2d0250414a74c19d",
"assets/packages/flutter_multi_formatter/flags/png/cl.png": "2ed34ecb10a528bffc6908fd65996d2b",
"assets/packages/flutter_multi_formatter/flags/png/ad.png": "77ce19646f93c63a2387f2840bc9686e",
"assets/packages/flutter_multi_formatter/flags/png/mp.png": "895e2aea9e8a9fb4a3db09ba75b2ae11",
"assets/packages/flutter_multi_formatter/flags/png/lt.png": "d79eb564dd857c66ddd65a41f4cdfe4e",
"assets/packages/flutter_multi_formatter/flags/png/mg.png": "4e20926e9ba5478d189f28adc813cd15",
"assets/packages/flutter_multi_formatter/flags/png/lc.png": "32e5433954c7a99cd53c1e67f2ac604a",
"assets/packages/flutter_multi_formatter/flags/png/tr.png": "ea664a8b19fa4bd81145900d57e53fda",
"assets/packages/flutter_multi_formatter/flags/png/ua.png": "2dc383ba79588bd5a15a519a26ef204a",
"assets/packages/flutter_multi_formatter/flags/png/tv.png": "d45cf6c6f6ec53ae9b52f77848dc6bf9",
"assets/packages/flutter_multi_formatter/flags/png/vi.png": "bfe5691810c27983346bf52eb5149bb4",
"assets/packages/flutter_multi_formatter/flags/png/mt.png": "5eecdcd5c105f26d27903fbb2a1d8b36",
"assets/packages/flutter_multi_formatter/flags/png/no.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/mc.png": "6375a336b1fd53d0e918ae945523078c",
"assets/packages/flutter_multi_formatter/flags/png/ch.png": "fe8519b23bed3b2e8669dac779c3cb55",
"assets/packages/flutter_multi_formatter/flags/png/bl.png": "072a0baffbf28632650627d339bf9c5b",
"assets/packages/flutter_multi_formatter/flags/png/aw.png": "410a04614d4176ea71f886f823fd35b5",
"assets/packages/flutter_multi_formatter/flags/png/bz.png": "820836c383ff34a06d3ac9f4bff68bd4",
"assets/packages/flutter_multi_formatter/flags/png/bm.png": "c348252e17350e0f8ef4f52e0791ca62",
"assets/packages/flutter_multi_formatter/flags/png/ci.png": "ad0d9306aab54c24a6b2146c3a74b954",
"assets/packages/flutter_multi_formatter/flags/png/mu.png": "ac855f82fe1038c119a25a07998fbb83",
"assets/packages/flutter_multi_formatter/flags/png/us.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/tw.png": "ec53e0e988f816e4841bd1ab3c27ed04",
"assets/packages/flutter_multi_formatter/flags/png/ye.png": "026c7294278c64c3b39dc085e8a96f3c",
"assets/packages/flutter_multi_formatter/flags/png/mw.png": "bbfeb66a5eed87cb6e72ea2686857df1",
"assets/packages/flutter_multi_formatter/flags/png/nl.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/ls.png": "ca6e2dfcf32adaea9d5e93d5391fb373",
"assets/packages/flutter_multi_formatter/flags/png/bo.png": "509a86a7d4d578c257766b8a06ef716f",
"assets/packages/flutter_multi_formatter/flags/png/at.png": "8bc220081abdf5fe2139dcf052fb922f",
"assets/packages/flutter_multi_formatter/flags/png/ck.png": "882bc3896cdd040757972bcbbf75e4bb",
"assets/packages/flutter_multi_formatter/flags/png/by.png": "c5d14943250d54b4a630794c5648c687",
"assets/packages/flutter_multi_formatter/flags/png/au.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/bn.png": "1f1c5a29f9a6fd77963f7bb3de5946c2",
"assets/packages/flutter_multi_formatter/flags/png/ma.png": "f60e4b79249dd35e15514d0148182e23",
"assets/packages/flutter_multi_formatter/flags/png/nz.png": "d22c137d0038c20c1fa98ae2ed3729b0",
"assets/packages/flutter_multi_formatter/flags/png/lr.png": "d64e3e67b0c90e2ef83ed9868f7c29b4",
"assets/packages/flutter_multi_formatter/flags/png/mv.png": "018b26f7521c2b3db9624f40e9e1f563",
"assets/packages/flutter_multi_formatter/flags/png/tc.png": "0faabda1411738e572144aaeed24aadd",
"assets/packages/flutter_multi_formatter/flags/png/ug.png": "18981ef65248d3bb97deda3fc30b7030",
"assets/packages/flutter_multi_formatter/flags/png/tt.png": "2633904bd4718afeecfa0503057a7f65",
"assets/packages/flutter_multi_formatter/flags/png/pl.png": "68252741ff7ad66838559050eb9c6b96",
"assets/packages/flutter_multi_formatter/flags/png/rs.png": "b8ef69ae6caf134436c2756f65736433",
"assets/packages/flutter_multi_formatter/flags/png/in.png": "6811ad48652c371323b8a540703ddf39",
"assets/packages/flutter_multi_formatter/flags/png/ge.png": "4ef3f738568d8503bde5f647e77cac2e",
"assets/packages/flutter_multi_formatter/flags/png/gr.png": "efeed503130172fadbace1481caab4bb",
"assets/packages/flutter_multi_formatter/flags/png/gs.png": "42f0c6f9ed997ae6902823a8418ed3b3",
"assets/packages/flutter_multi_formatter/flags/png/gd.png": "7d4b72f73674133acb00c0ea3959e16b",
"assets/packages/flutter_multi_formatter/flags/png/io.png": "d4910e28f0164bc879999c17024d543c",
"assets/packages/flutter_multi_formatter/flags/png/hk.png": "3be1f46b75533ab2d423fe274cc398f0",
"assets/packages/flutter_multi_formatter/flags/png/kp.png": "8fcc8f2fc646b484b4a47cdc0ff21cab",
"assets/packages/flutter_multi_formatter/flags/png/gb-nir.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/kg.png": "660be92bf4794cf3207e33005212f272",
"assets/packages/flutter_multi_formatter/flags/png/pm.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/sv.png": "753e9326b9b68202b481b88dbb14e2d4",
"assets/packages/flutter_multi_formatter/flags/png/re.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/sa.png": "c1bcb7b3a1dbff8f6fffb9929f458ea1",
"assets/packages/flutter_multi_formatter/flags/png/sc.png": "fce9893562cbe99d2e62a46b03e42007",
"assets/packages/flutter_multi_formatter/flags/png/st.png": "5abecf1202ef9f7b33bdb9d0e3913f80",
"assets/packages/flutter_multi_formatter/flags/png/ke.png": "be246664f01fa71c4b8a359305bf6d36",
"assets/packages/flutter_multi_formatter/flags/png/im.png": "df5f4c630542e241989ac64324374e42",
"assets/packages/flutter_multi_formatter/flags/png/kr.png": "938f9cb1029a71863e88011f3e79a00d",
"assets/packages/flutter_multi_formatter/flags/png/gf.png": "91f3e592fea6812f87ca5e5994924230",
"assets/packages/flutter_multi_formatter/flags/png/dj.png": "b3887992b38f208e22159d34b7cb36b5",
"assets/packages/flutter_multi_formatter/flags/png/gq.png": "7ee7587ec0dcf50180ddaad9cbb10cac",
"assets/packages/flutter_multi_formatter/flags/png/gp.png": "590296857fc9d61220d0155243075daa",
"assets/packages/flutter_multi_formatter/flags/png/dk.png": "1c6b350f84ce03775de43f8dadb3dd6f",
"assets/packages/flutter_multi_formatter/flags/png/gg.png": "c9d9c382e727a7a867fa824a0dd74d56",
"assets/packages/flutter_multi_formatter/flags/png/il.png": "5497e2fc32b1174d37f9bbbeacd6265b",
"assets/packages/flutter_multi_formatter/flags/png/pn.png": "20a24767371c336d18ad9800c523c45a",
"assets/packages/flutter_multi_formatter/flags/png/sb.png": "12cccb421defca5c7a4d19661f98f06f",
"assets/packages/flutter_multi_formatter/flags/png/py.png": "4dca66b598604fb3af9dee2fd9622ac4",
"assets/packages/flutter_multi_formatter/flags/png/ru.png": "7eb6cedfbcc7f6448e54850279ff5baf",
"assets/packages/flutter_multi_formatter/flags/png/kw.png": "ff36685c5fa06a2896307a5074e74914",
"assets/packages/flutter_multi_formatter/flags/png/do.png": "a877d29919ed6e1814b07835d7806f61",
"assets/packages/flutter_multi_formatter/flags/png/gt.png": "5b45ad96fdb90c56d2cd39abefd394d0",
"assets/packages/flutter_multi_formatter/flags/png/gb.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/gu.png": "99e5df9e745605fbb1f93155535a2964",
"assets/packages/flutter_multi_formatter/flags/png/je.png": "04ae403448836c13eaddd26fa9e64d55",
"assets/packages/flutter_multi_formatter/flags/png/hm.png": "63084e9484c0b6db451a1d68ad5adeb9",
"assets/packages/flutter_multi_formatter/flags/png/sg.png": "a90e323283257b28b19372e19bda950d",
"assets/packages/flutter_multi_formatter/flags/png/pk.png": "e7bb9a64f3581f8f2d5aa93489009a80",
"assets/packages/flutter_multi_formatter/flags/png/sr.png": "1b7f101242df10cf44ef9b91acd4de97",
"assets/packages/flutter_multi_formatter/flags/png/se.png": "d96d54ba355a0427d2dc84e380c56e2c",
"assets/packages/flutter_multi_formatter/flags/png/jp.png": "d843ce06dae06e8cf9780b71d6e3d43b",
"assets/packages/flutter_multi_formatter/flags/png/gw.png": "806f63c256bddd4f1680529f054f4043",
"assets/packages/flutter_multi_formatter/flags/png/eh.png": "53c935334ea149b54d38341cacb06a17",
"assets/packages/flutter_multi_formatter/flags/png/dz.png": "e8359823a7ce2e1b2d1ef79361bdbebc",
"assets/packages/flutter_multi_formatter/flags/png/ga.png": "7a9bd1b751a4c92c4a00897dbb973214",
"assets/packages/flutter_multi_formatter/flags/png/fr.png": "4d9d99a113066b97f91654f17d671dac",
"assets/packages/flutter_multi_formatter/flags/png/dm.png": "abcbefc6234d640787ef0f0cbfd78c32",
"assets/packages/flutter_multi_formatter/flags/png/hn.png": "5a183482f4faea009e4d524c1e470397",
"assets/packages/flutter_multi_formatter/flags/png/sd.png": "40572a05b7cd8ea53cee59c6be331588",
"assets/packages/flutter_multi_formatter/flags/png/rw.png": "0bd92f502b566eb99a537e88e0c5294f",
"assets/packages/flutter_multi_formatter/flags/png/ph.png": "158bd50b6f2d18f398e8600f6663b488",
"assets/packages/flutter_multi_formatter/flags/png/ss.png": "bfc79aa44e6d2b026717f7aae4431639",
"assets/packages/flutter_multi_formatter/flags/png/qa.png": "db8bdadc6a164ef1e4f1deda1e9fb965",
"assets/packages/flutter_multi_formatter/flags/png/pe.png": "0291aca80c2a0f52d66177d16e0da63c",
"assets/packages/flutter_multi_formatter/flags/png/pr.png": "a55695e2970e758c9b2f468275e548c8",
"assets/packages/flutter_multi_formatter/flags/png/si.png": "9fa57dc95640bcd67051d7ff63caa828",
"assets/packages/flutter_multi_formatter/flags/png/ht.png": "a49a27479ed8be33d962898febc049f1",
"assets/packages/flutter_multi_formatter/flags/png/es.png": "28c7e07bba944889c1870dfc88a4c6a8",
"assets/packages/flutter_multi_formatter/flags/png/gl.png": "c36a016c88239ab5815e8ef2674182fe",
"assets/packages/flutter_multi_formatter/flags/png/gm.png": "fc1129765b7fe093c978e83cbb0f9de1",
"assets/packages/flutter_multi_formatter/flags/png/er.png": "300cbfb7dda5e2eea87e9b03660a6077",
"assets/packages/flutter_multi_formatter/flags/png/fi.png": "b267e5dee2f81cd260b74cd6f4a80921",
"assets/packages/flutter_multi_formatter/flags/png/ee.png": "d2beb66602072a33aa332ac906241838",
"assets/packages/flutter_multi_formatter/flags/png/kn.png": "8b078bf876eca8c26e471dbcd74f4058",
"assets/packages/flutter_multi_formatter/flags/png/hu.png": "ff1d0e2bc549da022f2312c4ac7ca109",
"assets/packages/flutter_multi_formatter/flags/png/iq.png": "9434c17a6d4653df965e3276137764a1",
"assets/packages/flutter_multi_formatter/flags/png/ky.png": "bacc27cd23c1e359244533ecb9043de6",
"assets/packages/flutter_multi_formatter/flags/png/sh.png": "09af1c5f1433c02e97a95286ce24f4d4",
"assets/packages/flutter_multi_formatter/flags/png/ps.png": "e3e006d28f6b72169c717c1dba49b4d5",
"assets/packages/flutter_multi_formatter/flags/png/pf.png": "2bcb58685c72a0ea189ed6f24787fcd8",
"assets/packages/flutter_multi_formatter/flags/png/sj.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/id.png": "20a48e5d6a67edfcae769c22cead8b75",
"assets/packages/flutter_multi_formatter/flags/png/is.png": "9fce179e688579504fb8210c51aed66d",
"assets/packages/flutter_multi_formatter/flags/png/eg.png": "f15be21bf64894f0c0db33336558fd64",
"assets/packages/flutter_multi_formatter/flags/png/fk.png": "f6489fb8240437330e0cec337c67ea3e",
"assets/packages/flutter_multi_formatter/flags/png/fj.png": "eab0bde840b3aedac9fade235301123c",
"assets/packages/flutter_multi_formatter/flags/png/gn.png": "3aa100d1196e50836442e4e41f56f866",
"assets/packages/flutter_multi_formatter/flags/png/gy.png": "64f3007da6bdc84a25d8ad6b5d7f3094",
"assets/packages/flutter_multi_formatter/flags/png/ir.png": "a84a156345dadcab5aeda5db9462447c",
"assets/packages/flutter_multi_formatter/flags/png/km.png": "c631326a464f21c51fbfd767be9bcf39",
"assets/packages/flutter_multi_formatter/flags/png/ie.png": "3882cc83555457cd3cdfbf1a285f7d39",
"assets/packages/flutter_multi_formatter/flags/png/kz.png": "caba66830ed539d3f86431ddf4006e72",
"assets/packages/flutter_multi_formatter/flags/png/ro.png": "4fcdf6021d56e82f0067a13e6cbd78a2",
"assets/packages/flutter_multi_formatter/flags/png/sk.png": "12494ad86edebb64916831a7fcdc45e4",
"assets/packages/flutter_multi_formatter/flags/png/pg.png": "96c8233f13b1f4e7200d6ac4173de697",
"assets/packages/flutter_multi_formatter/flags/png/pt.png": "f7c4f806d879f5044fcc700029a20fcb",
"assets/packages/flutter_multi_formatter/flags/png/so.png": "15ce03e7b634c7c93f922ef4553f19ca",
"assets/packages/flutter_multi_formatter/flags/png/sx.png": "195a32986e11f1d0411a5fc20abd0c5e",
"assets/packages/flutter_multi_formatter/flags/png/hr.png": "3175463c3e7e42116d5b59bc1da19a3f",
"assets/packages/flutter_multi_formatter/flags/png/ki.png": "a93bda4f0f004d9c865f93d25c81ce18",
"assets/packages/flutter_multi_formatter/flags/png/jm.png": "87dbf861e528586787fdf8b6617e2f61",
"assets/packages/flutter_multi_formatter/flags/png/eu.png": "2c370e3de950262a37b025374cfaebce",
"assets/packages/flutter_multi_formatter/flags/png/ec.png": "9d139a75b21aaa301124ad846b7390f7",
"assets/packages/flutter_multi_formatter/flags/png/et.png": "7bc0f7bd7b4c252b375fc5bd94fe6a3f",
"assets/packages/flutter_multi_formatter/flags/png/fo.png": "7b2aa7754ea3a43b6372b2c7d93da023",
"assets/packages/flutter_multi_formatter/flags/png/kh.png": "a6ddda12068511bce8e99d2b82c13b49",
"assets/packages/flutter_multi_formatter/flags/png/sy.png": "3b05b2bf6694eadbdd84f89065cbb7f4",
"assets/packages/flutter_multi_formatter/flags/png/sn.png": "abaea692165cc3e890df7b736cf37a76",
"assets/packages/flutter_multi_formatter/flags/png/pw.png": "191c97390c0c0407c99b9d5fb9d98f34",
"assets/packages/flutter_multi_formatter/flags/png/sl.png": "460ba6dfd434d06bfbe2e3bc4944c24c",
"assets/packages/flutter_multi_formatter/flags/png/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/flutter_multi_formatter/flags/png/fm.png": "ad0f179f11aabd724f0f00c3ad26ad25",
"assets/packages/flutter_multi_formatter/flags/png/gi.png": "987d065705257febe56bdbe05a294749",
"assets/packages/flutter_multi_formatter/flags/png/de.png": "e2227152ece494eabbb6b184dfb9f9a9",
"assets/packages/flutter_multi_formatter/flags/png/gh.png": "bc7dc85567546d0191df4d4fcc892a8a",
"assets/packages/flutter_multi_formatter/flags/png/jo.png": "79a73b63a1e0d78a08da882b146a2224",
"assets/packages/flutter_multi_formatter/flags/png/it.png": "b8242dd6b72444e3a5b6a9b5e4b95407",
"assets/packages/flutter_multi_formatter/flags/png/pa.png": "0c91186f67333cece25b7b6f114aebce",
"assets/packages/flutter_multi_formatter/flags/png/sz.png": "491394c84dbb654442e0ad63296f3cd2",
"assets/packages/flutter_multi_formatter/flags/png/sm.png": "48e98ad719be013cadf5139a5f2e2d79",
"assets/packages/flutter_multi_formatter/flags/png/tn.png": "e71d23c64e7407651f805fa14262999e",
"assets/packages/flutter_multi_formatter/flags/png/ml.png": "7378ecc1a8b6c91aa5d9a26c982e4f0a",
"assets/packages/flutter_multi_formatter/flags/png/cg.png": "e5a127b0915eff11a439a9757f484dd6",
"assets/packages/flutter_multi_formatter/flags/png/ax.png": "7a8b9f688330386f5437b9e4bdf3c3e2",
"assets/packages/flutter_multi_formatter/flags/png/ao.png": "91660ff95663f3ea8f6ddfc0c97c2ab3",
"assets/packages/flutter_multi_formatter/flags/png/bt.png": "9857d9fa48b572226e9c4275fb0f3804",
"assets/packages/flutter_multi_formatter/flags/png/an.png": "cccd19a062794a67af709a59b91a9ae2",
"assets/packages/flutter_multi_formatter/flags/png/bb.png": "bad762779f71fb00e9dbc0f4a971816f",
"assets/packages/flutter_multi_formatter/flags/png/cf.png": "0da7e59a85d78ca89a3a45f68f967a92",
"assets/packages/flutter_multi_formatter/flags/png/mm.png": "5afdb2c6123f2bec3fdecd638409ab06",
"assets/packages/flutter_multi_formatter/flags/png/li.png": "1abb7f4421487e6f40007c97ccf98c3d",
"assets/packages/flutter_multi_formatter/flags/png/na.png": "67421813025b783b38ce65fb66f330ec",
"assets/packages/flutter_multi_formatter/flags/png/mz.png": "6e98a2bf86f2d8d0f4eaffaf8bd591b7",
"assets/packages/flutter_multi_formatter/flags/png/to.png": "4229da15117671214ec83c6365dce0b5",
"assets/packages/flutter_multi_formatter/flags/png/vg.png": "420edc09fba1878f87336f8ebcdcee66",
"assets/packages/flutter_multi_formatter/flags/png/ve.png": "2e8670420a607b77ebb5df3a6d9ce16a",
"assets/packages/flutter_multi_formatter/flags/png/tz.png": "466bbbf4023c5cb013d202f74f19e743",
"assets/packages/flutter_multi_formatter/flags/png/tm.png": "153c0223e88169e2d988afa1ba74d0b9",
"assets/packages/flutter_multi_formatter/flags/png/mx.png": "0763a52cbbb6f882d1c7b67097bd35ee",
"assets/packages/flutter_multi_formatter/flags/png/nc.png": "b94385d139bf8b82b5b3f20559feece5",
"assets/packages/flutter_multi_formatter/flags/png/mo.png": "6e18ce749771587d8effc18479e000d2",
"assets/packages/flutter_multi_formatter/flags/png/lk.png": "b7ab4259e284bb6f4f30cb8ec5e9b1b6",
"assets/packages/flutter_multi_formatter/flags/png/cd.png": "f0b60b807ec62ebfc391ff50c79ec30e",
"assets/packages/flutter_multi_formatter/flags/png/al.png": "3a69913f1180f063cc70c2d09c43a882",
"assets/packages/flutter_multi_formatter/flags/png/bw.png": "53fede7a11b197c2cf5cc9667544d323",
"assets/packages/flutter_multi_formatter/flags/png/cr.png": "40dc5bc52eb9391bd6d1bf895b107a65",
"assets/packages/flutter_multi_formatter/flags/png/bv.png": "13708df2028ac76d28ec0eb35383ea4f",
"assets/packages/flutter_multi_formatter/flags/png/am.png": "55d71092c291a382a8fb4e0dae4b76a0",
"assets/packages/flutter_multi_formatter/flags/png/az.png": "98833fec449ef8d633ef934e63080891",
"assets/packages/flutter_multi_formatter/flags/png/ba.png": "4b5ad282e533a2e75d8b6ce8cff43db0",
"assets/packages/flutter_multi_formatter/flags/png/mn.png": "3942d1f8bfa86fd13115a70543c6c188",
"assets/packages/flutter_multi_formatter/flags/png/nu.png": "146c66c2ede3bd38ec680f76ef6525a0",
"assets/packages/flutter_multi_formatter/flags/png/my.png": "72f82829eb4588404d519b84bfd5ad58",
"assets/packages/flutter_multi_formatter/flags/png/tl.png": "5519f1e7173e1f345d1580bab1b34d51",
"assets/packages/flutter_multi_formatter/flags/png/ws.png": "d8e4ad3af401330e3f11db4be39dbf32",
"assets/packages/flutter_multi_formatter/flags/png/th.png": "626cf312c47ded97bf5dbb4339e9f02c",
"assets/packages/flutter_multi_formatter/flags/png/xk.png": "df22513149a597035238f0f0c9f06014",
"assets/packages/flutter_multi_formatter/flags/png/nf.png": "3391aec8dc77dd300f835bae7ffccd17",
"assets/packages/flutter_multi_formatter/flags/png/ly.png": "fdb3cba16a701d5471dd3bbcc6a31473",
"assets/packages/flutter_multi_formatter/flags/png/ai.png": "7112379111bbf96dae31e0b13a62b926",
"assets/packages/flutter_multi_formatter/flags/png/br.png": "0a7988dc68c66634f9e95ad0d878f7ba",
"assets/packages/flutter_multi_formatter/flags/png/cv.png": "0be7f55dcf12a903fc49a72a1071b901",
"assets/packages/flutter_multi_formatter/flags/png/be.png": "92d0285f6ed8a74a8fa6ea4b3770daac",
"assets/packages/flutter_multi_formatter/flags/png/ca.png": "e20a51380b2da69353e3755edead340d",
"assets/packages/flutter_multi_formatter/flags/png/bd.png": "0ca802e7f67045161047607b20c6490e",
"assets/packages/flutter_multi_formatter/flags/png/cw.png": "a0fc17a5c96bc82996fa70d50aa9b339",
"assets/packages/flutter_multi_formatter/flags/png/bs.png": "4a88a47c73294f193cf7ad5fabfcb7ea",
"assets/packages/flutter_multi_formatter/flags/png/ng.png": "eeb857562b3dfcd105aef9ec371a916f",
"assets/packages/flutter_multi_formatter/flags/png/mk.png": "644972c75548c32b4b99593b48d32791",
"assets/packages/flutter_multi_formatter/flags/png/np.png": "761c731a0b63ab006273b4a1910ccf86",
"assets/packages/flutter_multi_formatter/flags/png/va.png": "e84a6f9dc08930a11d1e4b9d25b6234f",
"assets/packages/flutter_multi_formatter/flags/png/uz.png": "475189379e4a67b29e9ab9a1d71f3cdd",
"assets/packages/flutter_multi_formatter/flags/png/um.png": "2171e21640cef63bd1296158f01a70cd",
"assets/packages/flutter_multi_formatter/flags/png/tk.png": "fcbceb6da21d71232ad719d05b6bb71b",
"assets/packages/flutter_multi_formatter/flags/png/vc.png": "9ff42949ac191ee0adcab3815779b748",
"assets/packages/flutter_multi_formatter/flags/png/zw.png": "94d25ac1764b0895f20405bc253b3647",
"assets/packages/flutter_multi_formatter/flags/png/nr.png": "09c7da9ea9f49dea55d2bdb853cc543c",
"assets/packages/flutter_multi_formatter/flags/png/ne.png": "f29940c4d22aed2105d362d5c7dc735e",
"assets/packages/flutter_multi_formatter/flags/png/cu.png": "82ec98ab8b9832e6a182367a5dd16f93",
"assets/packages/flutter_multi_formatter/flags/png/bq.png": "1cf2f5a0a4421b2f0c8597c91c354d80",
"assets/packages/flutter_multi_formatter/flags/png/bf.png": "54bb2c64b28b60df100b8abfb4b71777",
"assets/packages/flutter_multi_formatter/flags/png/bg.png": "6b473783a5c5b427e668a2048022663e",
"assets/packages/flutter_multi_formatter/flags/png/cc.png": "5d1c266d4620dc7203023882a7b647e5",
"assets/packages/flutter_multi_formatter/flags/png/gb-wls.png": "eb929cd0fe93fab638ea3f3c4b655593",
"assets/packages/flutter_multi_formatter/flags/png/mh.png": "d5ab4a201a322f99454e184699037506",
"assets/packages/flutter_multi_formatter/flags/png/za.png": "6cd7101a5f0d4b167af862b92ba8e19e",
"assets/packages/flutter_multi_formatter/flags/png/uy.png": "98db711aa764b56a68a37820995a7685",
"assets/packages/flutter_multi_formatter/flags/png/wf.png": "8e40a0c5be4080ffea10070744837d43",
"assets/packages/flutter_multi_formatter/flags/png/vu.png": "043330591a2b97ba1ef46ea08bfbbe24",
"assets/packages/flutter_multi_formatter/flags/png/tj.png": "a9e427318b756c0c03bec3f3ff976fa3",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "35f868572dc005b98bef667540d51d9e",
"assets/fonts/MaterialIcons-Regular.otf": "d21edba1428d4b96536978b04448ac0f",
"assets/assets/env.txt": "6229677e2fb8e35522651e3a6543bdc2",
"assets/assets/images/logoOscuro2.jpeg": "1070459aeffde5c16aad87918241770f",
"assets/assets/images/logoOscuro3.jpeg": "a771cb7307db00586902f40ba9732fcc",
"assets/assets/images/logoBlanco1.jpeg": "e4a1142c744378d575e6aadd1b23eefa",
"assets/assets/images/logoBlanco3.jpeg": "5fb8803ff12a5e6375be57251698d132",
"assets/assets/images/logoBlanco2.jpeg": "e1c3511848f8158a14f5fc6e1d1f22c6",
"assets/assets/images/fond_page.png": "0f787698a5d5fd01d6074718529d2e07",
"assets/assets/images/logoSemi1.jpeg": "ac3cffcae3954623d5bae259a234be7f",
"assets/assets/images/logoOscuro1.jpeg": "505549234635c9dde629b09d2b8dccac",
"assets/assets/Render/Camaron3d.glb": "04cb1d50d4a0fca6fc48733b291d33ae",
"assets/assets/fonts/static/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
