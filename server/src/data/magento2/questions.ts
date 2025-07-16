import {Question} from '@/types/questionType';

export const questions: Question[] = [
    {
        id: 1,
        text: 'Which file registers a Magento 2 module with the framework?',
        choices: [
            'app/code/Vendor/Module/etc/module.xml',
            'app/code/Vendor/Module/registration.php',
            'app/etc/config.xml',
            'app/code/Vendor/Module/composer.json'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>app/code/Vendor/Module/registration.php</strong>: registers the module.</li>
        <li>module.xml only declares metadata.</li>
      </ul>
    `
    },
    {
        id: 2,
        text: 'What is declared in etc/module.xml?',
        choices: [
            'Module registration',
            'Module name, version, and dependencies',
            'Composer autoload rules',
            'Route configuration'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>Module name, version, and dependencies</strong>: key metadata.</li>
        <li>Registration is in registration.php.</li>
      </ul>
    `
    },
    {
        id: 3,
        text: 'Which file configures PSR-4 autoloading for a custom module?',
        choices: [
            'etc/di.xml',
            'composer.json',
            'registration.php',
            'etc/module.xml'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>composer.json</strong>: sets PSR-4 autoloading.</li>
        <li>di.xml is for DI config.</li>
      </ul>
    `
    },
    {
        id: 4,
        text: 'In di.xml, what does a <preference> do?',
        choices: [
            'Maps an interface to a concrete class',
            'Defines a plugin',
            'Registers an observer',
            'Declares a cron job'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Maps an interface to a concrete class</strong>: overrides defaults.</li>
        <li>Plugins use <type> and <plugin> tags.</li>
      </ul>
    `
    },
    {
        id: 5,
        text: 'Which plugin type runs before the original method?',
        choices: [
            'around',
            'before',
            'after',
            'override'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>before</strong>: executes before the target method.</li>
        <li>after runs afterward; around wraps it.</li>
      </ul>
    `
    },
    {
        id: 6,
        text: 'Where do you configure event observers?',
        choices: [
            'etc/events.xml',
            'etc/di.xml',
            'etc/observer.xml',
            'etc/crontab.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/events.xml</strong>: lists events and observers.</li>
        <li>crontab.xml is for cron jobs.</li>
      </ul>
    `
    },
    {
        id: 7,
        text: 'To dispatch a custom event, which method is used?',
        choices: [
            'EventManager::run()',
            'Magento\Framework\Event\ManagerInterface::dispatch()',
            'Observer::execute()',
            'Plugin::aroundMethod()'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>ManagerInterface::dispatch()</strong>: dispatches events.</li>
        <li>Observer::execute handles them.</li>
      </ul>
    `
    },
    {
        id: 8,
        text: 'Which file defines a frontend route?',
        choices: [
            'etc/frontend/routes.xml',
            'etc/adminhtml/routes.xml',
            'etc/webapi.xml',
            'etc/routes.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/frontend/routes.xml</strong>: frontend area routes.</li>
        <li>adminhtml routes go in etc/adminhtml/routes.xml.</li>
      </ul>
    `
    },
    {
        id: 9,
        text: 'Controller actions must implement which interface?',
        choices: [
            'Magento\Framework\App\Action\ActionInterface',
            'Magento\Framework\App\Action\HttpGetActionInterface',
            'Magento\Framework\Controller\ResultInterface',
            'Magento\Framework\App\RequestInterface'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>HttpGetActionInterface</strong>: defines execute() for GET requests.</li>
        <li>ResultInterface is for responses.</li>
      </ul>
    `
    },
    {
        id: 10,
        text: 'Which class is the base for block templates?',
        choices: [
            'Magento\Framework\View\Element\Template',
            'Magento\Framework\Model\AbstractModel',
            'Magento\Framework\App\Action\Action',
            'Magento\Framework\View\Element\Html\Link'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Template</strong>: base block for phtml templates.</li>
        <li>Link extends Html\Link for anchor rendering.</li>
      </ul>
    `
    },
    {
        id: 11,
        text: 'Layout XML files are placed under which directory?',
        choices: [
            'view/base/layout',
            'etc/layout',
            'view/frontend/layout',
            'app/layout'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>view/frontend/layout</strong>: frontend layouts.</li>
        <li>view/adminhtml/layout for admin.</li>
      </ul>
    `
    },
    {
        id: 12,
        text: 'How do you add a new block via layout XML?',
        choices: [
            '<referenceContainer name="content"><block /></referenceContainer>',
            '<referenceBlock name="content"><block /></referenceBlock>',
            '<container name="content"><block /></container>',
            '<blockContainer name="content"><block /></blockContainer>'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong><referenceContainer>+<block></strong>: adds block into container.</li>
        <li>referenceBlock targets existing block.</li>
      </ul>
    `
    },
    {
        id: 13,
        text: 'UI components are declared in which XML folder?',
        choices: [
            'view/frontend/ui_component',
            'etc/ui_components',
            'app/code/ui_component',
            'view/adminhtml/web'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>view/frontend/ui_component</strong>: holds UI component definitions.</li>
        <li>view/adminhtml/ui_component for admin grids.</li>
      </ul>
    `
    },
    {
        id: 14,
        text: 'Which JS file configures RequireJS mixins?',
        choices: [
            'requirejs-config.js',
            'mixins.js',
            'etc/di.js',
            'app.js'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>requirejs-config.js</strong>: maps mixins and paths.</li>
        <li>mixins.js is not a core file.</li>
      </ul>
    `
    },
    {
        id: 15,
        text: 'To deploy static content, which CLI command is used?',
        choices: [
            'bin/magento setup:deploy',
            'bin/magento setup:static-content:deploy',
            'bin/magento static:deploy',
            'bin/magento setup:di:compile'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>static-content:deploy</strong>: publishes CSS/JS for storefront.</li>
        <li>di:compile generates interceptors.</li>
      </ul>
    `
    },
    {
        id: 16,
        text: 'Which deploy mode shows error messages in browser?',
        choices: [
            'production',
            'developer',
            'default',
            'staging'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>developer</strong>: verbose error output and live compilation.</li>
        <li>production hides errors and caches aggressively.</li>
      </ul>
    `
    },
    {
        id: 17,
        text: 'How do you clear all caches via CLI?',
        choices: [
            'bin/magento cache:clean',
            'bin/magento cache:flush',
            'bin/magento cache:clear',
            'bin/magento cache:reset'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>cache:flush</strong>: clears storage including third-party caches.</li>
        <li>cache:clean only cleans Magento’s cache types.</li>
      </ul>
    `
    },
    {
        id: 18,
        text: 'Which command reindexes all indexers?',
        choices: [
            'bin/magento indexer:reindex',
            'bin/magento indexer:refresh',
            'bin/magento indexer:reset',
            'bin/magento index:run'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>indexer:reindex</strong>: runs all indexers.</li>
        <li>refresh and reset are not valid commands.</li>
      </ul>
    `
    },
    {
        id: 19,
        text: 'Magento’s EAV model stands for?',
        choices: [
            'Entity-Attribute-Value',
            'Entity-Application-View',
            'Edition-Attribute-Version',
            'Event-Action-View'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Entity-Attribute-Value</strong>: flexible data model for products.</li>
        <li>Other options are incorrect expansions.</li>
      </ul>
    `
    },
    {
        id: 20,
        text: 'To add a new product attribute in InstallData, implement which interface?',
        choices: [
            'InstallSchemaInterface',
            'DataPatchInterface',
            'InstallDataInterface',
            'UpgradeDataInterface'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>InstallDataInterface</strong>: initial data setup including attributes.</li>
        <li>DataPatchInterface is newer alternative but not InstallData.</li>
      </ul>
    `
    },
    {
        id: 21,
        text: 'Which script runs when bumping module schema version?',
        choices: [
            'InstallSchema',
            'UpgradeSchema',
            'InstallData',
            'UpgradeData'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>UpgradeSchema</strong>: alters DB schema on version change.</li>
        <li>InstallSchema only runs on first install.</li>
      </ul>
    `
    },
    {
        id: 22,
        text: 'What replaces InstallData in newer modules?',
        choices: [
            'SchemaPatchInterface',
            'UpgradeDataInterface',
            'DataPatchInterface',
            'ModulePatchInterface'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>DataPatchInterface</strong>: incremental data scripts.</li>
        <li>SchemaPatchInterface is for schema changes.</li>
      </ul>
    `
    },
    {
        id: 23,
        text: 'Cron jobs are configured in which file?',
        choices: [
            'etc/crontab.xml',
            'etc/cron_schedule.xml',
            'app/code/crontab.xml',
            'etc/crontab.yaml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/crontab.xml</strong>: defines cron jobs and schedules.</li>
        <li>cron_schedule is DB table name.</li>
      </ul>
    `
    },
    {
        id: 24,
        text: 'Which XML tag sets cron frequency?',
        choices: [
            '<schedule>',
            '<frequency>',
            '<cronExpr>',
            '<group>'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>&lt;schedule&gt;</strong>: contains cron expression.</li>
        <li>group groups jobs; cronExpr not a tag.</li>
      </ul>
    `
    },
    {
        id: 25,
        text: 'Which interface is used for logging?',
        choices: [
            'Psr\Log\LoggerInterface',
            'Magento\Framework\Logger\LoggerInterface',
            'Magento\Framework\App\LoggerInterface',
            'Psr\Log\LogInterface'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Psr\Log\LoggerInterface</strong>: standard logging API.</li>
        <li>Magento\Framework logger implements PSR interface.</li>
      </ul>
    `
    },
    {
        id: 26,
        text: 'To create a custom log file, configure which DI type?',
        choices: [
            '<type name="Psr\Log\LoggerInterface">',
            '<virtualType name="CustomLogger">',
            '<logger name="custom">',
            '<argument name="file" xsi:type="string">'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>type name="Psr\Log\LoggerInterface"</strong>: preference for custom logger.</li>
        <li>virtualType defines new class but not preference.</li>
      </ul>
    `
    },
    {
        id: 27,
        text: 'Which service reads system config values?',
        choices: [
            'ScopeConfigInterface',
            'ConfigReaderInterface',
            'StoreManagerInterface',
            'ConfigFactory'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>ScopeConfigInterface</strong>: retrieves store config values.</li>
        <li>StoreManager handles store contexts.</li>
      </ul>
    `
    },
    {
        id: 28,
        text: 'System settings in Admin are defined in which file?',
        choices: [
            'etc/adminhtml/system.xml',
            'etc/system.json',
            'etc/config.xml',
            'view/adminhtml/ui_component/system.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>adminhtml/system.xml</strong>: defines config sections and fields.</li>
        <li>config.xml is global defaults.</li>
      </ul>
    `
    },
    {
        id: 29,
        text: 'ACL rules are declared in which file?',
        choices: [
            'etc/acl.xml',
            'etc/authorization.xml',
            'etc/permissions.xml',
            'etc/adminhtml/acl.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/acl.xml</strong>: defines roles and resources.</li>
        <li>adminhtml subfolder is not needed.</li>
      </ul>
    `
    },
    {
        id: 30,
        text: 'Admin menu items are configured in which file?',
        choices: [
            'etc/adminhtml/menu.xml',
            'etc/menu.xml',
            'etc/navigation.xml',
            'etc/admin/navigation.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>adminhtml/menu.xml</strong>: defines menu structure.</li>
        <li>navigation.xml not used by core.</li>
      </ul>
    `
    },
    {
        id: 31,
        text: 'REST API endpoints are defined in which file?',
        choices: [
            'etc/webapi.xml',
            'etc/api.xml',
            'etc/rest.xml',
            'etc/webapi_rest.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/webapi.xml</strong>: maps routes to services.</li>
        <li>api.xml relates to WSDL generation.</li>
      </ul>
    `
    },
    {
        id: 32,
        text: 'GraphQL schemas go under which directory?',
        choices: [
            'etc/graphql',
            'etc/webapi_graphql',
            'view/graphql',
            'etc/schema/graphql'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/graphql</strong>: holds .graphqls schema files.</li>
        <li>view folders are for UI assets.</li>
      </ul>
    `
    },
    {
        id: 33,
        text: 'Which file configures message queues?',
        choices: [
            'etc/queue.xml',
            'etc/messages.xml',
            'etc/mq.xml',
            'etc/consumer.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/queue.xml</strong>: defines topics and bindings.</li>
        <li>consumer.xml lists consumer settings separately.</li>
      </ul>
    `
    },
    {
        id: 34,
        text: 'Consumers are configured in which file?',
        choices: [
            'etc/consumer.xml',
            'etc/queue.xml',
            'etc/mqn.xml',
            'etc/consumers.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>etc/consumer.xml</strong>: registers message queue consumers.</li>
        <li>queue.xml is for topics and publishers.</li>
      </ul>
    `
    },
    {
        id: 35,
        text: 'Theme fallback order starts with?',
        choices: [
            'parent theme',
            'base theme',
            'current theme',
            'blank theme'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>current theme</strong>: Magento first looks here.</li>
        <li>then parent and blank/base themes.</li>
      </ul>
    `
    },
    {
        id: 36,
        text: 'Image roles (e.g., thumbnail) are defined in which file?',
        choices: [
            'view/frontend/etc/view.xml',
            'etc/view.xml',
            'etc/theme.xml',
            'view/base/view.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>view/frontend/etc/view.xml</strong>: configures image sizes per role.</li>
        <li>theme.xml only lists available themes.</li>
      </ul>
    `
    },
    {
        id: 37,
        text: 'Translation dictionaries (.csv) go in which directory?',
        choices: [
            'i18n',
            'etc/i18n',
            'view/frontend/i18n',
            'var/i18n'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>i18n</strong> at module root: contains locale CSV files.</li>
        <li>etc subfolders not used for i18n.</li>
      </ul>
    `
    },
    {
        id: 38,
        text: 'To fetch a layout XML file programmatically, use which class?',
        choices: [
            'LayoutInterface',
            'PageFactory',
            'LayoutFactory',
            'ResultFactory'
        ],
        correctIndex: 2,
        explanation: `
      <ul>
        <li><strong>LayoutFactory</strong>: creates layout instances.</li>
        <li>PageFactory returns full page results.</li>
      </ul>
    `
    },
    {
        id: 39,
        text: 'Which CLI command shows module status?',
        choices: [
            'module:status',
            'setup:status',
            'module:list',
            'setup:upgrade'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>module:status</strong>: shows enabled/disabled modules.</li>
        <li>module:list not a valid command.</li>
      </ul>
    `
    },
    {
        id: 40,
        text: 'Which command upgrades DB schema and data?',
        choices: [
            'setup:db:upgrade',
            'setup:upgrade',
            'db:upgrade',
            'setup:db:status'
        ],
        correctIndex: 1,
        explanation: `
      <ul>
        <li><strong>setup:upgrade</strong>: runs schema and data patches.</li>
        <li>db:status shows pending patches.</li>
      </ul>
    `
    },
    {
        id: 41,
        text: 'Which folder contains email templates?',
        choices: [
            'view/frontend/email',
            'etc/email',
            'i18n/email',
            'view/email/frontend'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>view/frontend/email</strong>: stores module’s email templates.</li>
        <li>etc is for config files.</li>
      </ul>
    `
    },
    {
        id: 42,
        text: 'Which class provides customer session data?',
        choices: [
            'Magento\Customer\Model\Session',
            'Magento\Customer\Api\AccountManagementInterface',
            'Magento\Framework\Session\SessionManager',
            'Magento\Customer\Api\SessionInterface'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Model\Session</strong>: handles customer session storage.</li>
        <li>SessionManager is generic session handler.</li>
      </ul>
    `
    },
    {
        id: 43,
        text: 'To enable a module, which command is used?',
        choices: [
            'module:enable Vendor_Module',
            'setup:module:enable Vendor_Module',
            'module:activate Vendor_Module',
            'enable:module Vendor_Module'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>module:enable Vendor_Module</strong>: enables the module.</li>
        <li>activate and enable:module are invalid.</li>
      </ul>
    `
    },
    {
        id: 44,
        text: 'Which file contains theme registration?',
        choices: [
            'theme.xml',
            'registration.php',
            'etc/theme.xml',
            'view/base/theme.xml'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>theme.xml</strong> in theme root: declares theme metadata.</li>
        <li>registration.php registers PHP modules, not themes.</li>
      </ul>
    `
    },
    {
        id: 45,
        text: 'Which class handles HTTP requests in Magento?',
        choices: [
            'Magento\Framework\App\Request\Http',
            'Magento\Framework\App\Action\HttpGetActionInterface',
            'Magento\Framework\Controller\RequestInterface',
            'Magento\Framework\App\RequestInterface'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>Request\Http</strong>: concrete HTTP request implementation.</li>
        <li>Action interfaces define controller actions.</li>
      </ul>
    `
    },
    {
        id: 46,
        text: 'Which cache type stores layout and config?',
        choices: [
            'config',
            'layout',
            'full_page',
            'block_html'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>config</strong>: caches merged configuration and layouts.</li>
        <li>layout caches page layouts; block_html caches rendered blocks.</li>
      </ul>
    `
    },
    {
        id: 47,
        text: 'Which table logs customer passwords in hashed form?',
        choices: [
            'customer_entity',
            'customer_password',
            'customer_log',
            'customer_hash'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>customer_entity</strong>: stores hashed passwords.</li>
        <li>customer_password does not exist by default.</li>
      </ul>
    `
    },
    {
        id: 48,
        text: 'Which environment file stores DB credentials?',
        choices: [
            'app/etc/env.php',
            'app/etc/config.php',
            'app/etc/local.xml',
            'app/etc/db.conf'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>env.php</strong>: holds database and base URL settings.</li>
        <li>config.php exports config but not credentials.</li>
      </ul>
    `
    },
    {
        id: 49,
        text: 'To enable template hints in developer mode, set which config path?',
        choices: [
            'dev/debug/template_hints_storefront',
            'dev/template/hints',
            'dev/debug/hints',
            'theme/debug/hints'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>dev/debug/template_hints_storefront</strong>: toggles hints.</li>
        <li>other paths are invalid.</li>
      </ul>
    `
    },
    {
        id: 50,
        text: 'Which command compiles dependency injection configuration?',
        choices: [
            'setup:di:compile',
            'setup:compile',
            'di:compile',
            'compile:di'
        ],
        correctIndex: 0,
        explanation: `
      <ul>
        <li><strong>setup:di:compile</strong>: generates factory and proxy classes.</li>
        <li>setup:compile alias exists but same as di:compile.</li>
      </ul>
    `
    }
];
