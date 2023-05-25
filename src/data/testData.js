const testData = {
	statuses: ['Total', 'Passed', 'Failed', 'Skipped', 'Product Bug', 'Automation Bug', 'System Issue', 'To Investigate'],
	newWidgetTypes: [
		'Launch statistics chart',
		'Overall statistics',
		'Launches duration chart',
		'Launch execution and issue statistic',
		'Project activity panel',
		'Test-cases growth trend chart',
		'Investigated percentage of launches',
		'Launches table',
		'Unique bugs table',
		'Most failed test-cases table (TOP-20)',
		'Failed cases trend chart',
		'Non-passed test-cases trend chart',
		'Different launches comparison chart',
		'Passing rate per launch',
		'Passing rate summary',
		'Flaky test cases table (TOP-20)',
		'Cumulative trend chart',
		'Most popular pattern table (TOP-20)',
		'Component health check',
		'Component health check (table view)',
		'Most time-consuming test cases widget (TOP-20)',
	],
	dashboards: [
		{
			name: 'DEMO DASHBOARD',
			description: 'Old Check apply widget names description',
			owner: 'superadmin',
			shared: true,
		},
		{
			name: 'Second Dashboard for testing',
			description: '',
			owner: 'superadmin',
			shared: false,
		},
	],
	dashboardsLaunchStatisticsArea: [
		{
			name: 'DEMO DASHBOARD',
			statuses: ['Total', 'Passed', 'Failed', 'Skipped', 'Product Bug', 'Automation Bug', 'System Issue', 'To Investigate'],
		},
		{
			name: 'Second Dashboard for testing',
			statuses: ['Total', 'Passed', 'Failed', 'Skipped', 'Product Bug', 'Automation Bug', 'System Issue', 'To Investigate'],
		},
	],
	dashboardsLaunchStatisticsBar: [
		{
			name: 'DEMO DASHBOARD',
			statuses: ['Passed', 'Failed', 'Skipped'],
		},
		{
			name: 'Second Dashboard for testing',
			statuses: ['Passed', 'Failed', 'Skipped'],
		},
	],
	dashboardsOverallStatistics: [
		{
			name: 'DEMO DASHBOARD',
			total: 100,
			passed: 66,
			failed: 31,
			skipped: 3,
		},
		{
			name: 'Second Dashboard for testing',
			total: 100,
			passed: 66,
			failed: 31,
			skipped: 3,
		},
	],
	widgets: [
		{
			widgetId: 0,
			widgetHeader: 'LAUNCH STATISTICS AREA',
		},
		{
			widgetId: 1,
			widgetHeader: 'LAUNCH STATISTICS BAR',
		},
		{
			widgetId: 2,
			widgetHeader: 'INVESTIGATED PERCENTAGE OF LAUNCHES',
		},
		{
			widgetId: 3,
			widgetHeader: 'TEST CASES GROWTH TREND CHART',
		},
		{
			widgetId: 4,
			widgetHeader: 'OVERALL STATISTICS PANEL',
		},
		{
			widgetId: 5,
			widgetHeader: 'LAUNCHES DURATION CHART',
		},
		{
			widgetId: 6,
			widgetHeader: 'OVERALL STATISTICS DONUT',
		},
		{
			widgetId: 7,
			widgetHeader: 'FAILED CASES TREND CHART',
		},
		{
			widgetId: 8,
			widgetHeader: 'LAUNCH TABLE',
		},
		{
			widgetId: 9,
			widgetHeader: 'MOST FAILED TEST CASES',
		},
		{
			widgetId: 10,
			widgetHeader: 'PASSING RATE SUMMARY',
		},
		{
			widgetId: 11,
			widgetHeader: 'FLAKY TEST CASES',
		},
	],
	testDashboard: {
		name: 'API TEST DASHBOARD',
		description: 'API test Dashboard',
		share: false,
	},
	testDashboardWithoutName: {
		name: '',
		description: 'Dashboard without name',
		share: false,
	},
};

exports.testData = testData;
